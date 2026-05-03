'use client';

import { useMemo, useEffect } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/survey-core.css';
import { SurveyPDF } from 'survey-pdf';
import { SurveyDefinition } from '@/types/survey';

interface GenericSurveyComponentProps {
  surveyDefinition: SurveyDefinition;
  pdfFileName: string;
}

export default function GenericSurveyComponent({
  surveyDefinition,
  pdfFileName,
}: GenericSurveyComponentProps) {
  const model = useMemo(() => {
    const surveyModel = new Model(surveyDefinition);
    surveyModel.showCompleteButton = false;
    surveyModel.showCompletePage = false;
    return surveyModel;
  }, [surveyDefinition]);

  useEffect(() => {
    const saveItemId = 'pdf-export';
    const signItemId = 'pdf-sign';

    const updateNavigationItems = () => {
      if (model.isLastPage) {
        model.addNavigationItem({
          id: saveItemId,
          title: 'Salvar como PDF',
          visible: true,
          action: () => savePDF(),
        });

        model.addNavigationItem({
          id: signItemId,
          title: 'Assinar',
          visible: true,
          action: () => criarDocumentoParaAssinar(),
        });
      }
    };

    async function savePDF() {
      const surveyPDF = new SurveyPDF(surveyDefinition);
      surveyPDF.data = model.data;
      surveyPDF.readOnly = true;
      await surveyPDF.save(pdfFileName);
    }

    async function criarDocumentoParaAssinar() {
      const surveyPDF = new SurveyPDF(surveyDefinition);
      surveyPDF.data = model.data;
      surveyPDF.readOnly = true;

      const rawBase64Pdf = await surveyPDF.raw('dataurlstring');

      const prefix = ';base64,';
      const prefixIndex = rawBase64Pdf.indexOf(prefix);

      const adjustedBase64Pdf =
        prefixIndex !== -1
          ? rawBase64Pdf.substring(prefixIndex + prefix.length)
          : rawBase64Pdf;

      console.log(
        'PDF base64 ready for ZapSign:',
        adjustedBase64Pdf.substring(0, 120),
      );

      try {
        console.log('Enviando documento para ZapSign...');

        const response = await fetch('/api/zapsign/criar-documento', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            base64_pdf: adjustedBase64Pdf,
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          console.error('Erro ao criar documento ZapSign:', result);
          alert(`Erro ao enviar documento: ${result.error}`);
          return;
        }

        console.log('Documento criado com sucesso:', result.data);
        alert(`Documento enviado com sucesso! Token: ${result.data.token}`);

        // Opcional: você pode redirecionar para a página de assinatura
        if (result.data.signers && result.data.signers.length > 0) {
          const signUrl = result.data.signers[0].sign_url;
          console.log('URL de assinatura:', signUrl);
          // Descomentar se quiser redirecionar automaticamente:
          window.open(signUrl, '_blank');
        }
      } catch (error) {
        console.error('Erro ao enviar documento:', error);
        alert(
          'Erro ao enviar documento. Verifique o console para mais detalhes.',
        );
      }
    }

    model.onCurrentPageChanged.add(updateNavigationItems);
  }, [model, surveyDefinition, pdfFileName]);

  return <Survey model={model} />;
}
