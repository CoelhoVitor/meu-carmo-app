import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

function base64ToUint8Array(base64: string): Uint8Array {
  const normalizedBase64 = base64.replace(/\s/g, '');
  const binaryString = window.atob(normalizedBase64);
  const bytes = new Uint8Array(binaryString.length);

  for (let index = 0; index < binaryString.length; index += 1) {
    bytes[index] = binaryString.charCodeAt(index);
  }

  return bytes;
}

function uint8ArrayToBase64(bytes: Uint8Array): string {
  let binaryString = '';

  for (const byte of bytes) {
    binaryString += String.fromCharCode(byte);
  }

  return window.btoa(binaryString);
}

export async function addSignatureAnchorsToPdf(
  base64Pdf: string,
): Promise<string> {
  if (!base64Pdf) {
    throw new Error('Base64 do PDF não informado');
  }

  const pdfBytes = base64ToUint8Array(base64Pdf);
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pages = pdfDoc.getPages();

  if (pages.length === 0) {
    throw new Error('O PDF gerado está vazio');
  }

  const lastPage = pages[pages.length - 1];
  lastPage.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const anchors = [
    { text: '<<chefe_assinatura>>', y: 60 },
    { text: '<<diretoria_assinatura>>', y: 40 },
    { text: '<<comissao_assinatura>>', y: 20 },
  ];

  anchors.forEach(({ text, y }) => {
    lastPage.drawText(text, {
      x: 40,
      y,
      size: 8,
      font,
      color: rgb(1, 1, 1),
    });
  });

  const modifiedPdfBytes = await pdfDoc.save();
  return uint8ArrayToBase64(modifiedPdfBytes);
}
