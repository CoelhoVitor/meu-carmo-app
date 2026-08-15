'use client';

import { useMemo, useEffect, useRef, useState } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/survey-core.css';
import { SurveyPDF } from 'survey-pdf';
import { SurveyDefinition } from '@/types/survey';
import { SurveyFlowConfig } from '@/utils/surveyFlow';

interface GenericSurveyComponentProps {
  surveyDefinition: SurveyDefinition;
  pdfFileName: string;
  surveyFlowConfig: SurveyFlowConfig;
}

export default function GenericSurveyComponent({
  surveyDefinition,
  pdfFileName,
  surveyFlowConfig,
}: GenericSurveyComponentProps) {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const surveyFlowConfigRef = useRef(surveyFlowConfig);
  const hasAddedCustomNavigationItemsRef = useRef(false);

  const model = useMemo(() => {
    const surveyModel = new Model(surveyDefinition);
    surveyModel.showCompleteButton = false;
    surveyModel.showCompletePage = false;
    return surveyModel;
  }, [surveyDefinition]);

  useEffect(() => {
    surveyFlowConfigRef.current = surveyFlowConfig;
    hasAddedCustomNavigationItemsRef.current = false;

    const saveItemId = 'pdf-export';
    const signItemId = 'pdf-sign';

    const updateNavigationItems = () => {
      if (!model.isLastPage || hasAddedCustomNavigationItemsRef.current) {
        return;
      }

      hasAddedCustomNavigationItemsRef.current = true;

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
        action: () => iniciarProcessoDeAssinatura(),
      });
    };

    async function savePDF() {
      const surveyPDF = new SurveyPDF(surveyDefinition);
      surveyPDF.data = model.data;
      surveyPDF.readOnly = true;
      await surveyPDF.save(pdfFileName);
    }

    async function iniciarProcessoDeAssinatura() {
      criarDocumentoParaAssinar();
    }

    async function criarDocumentoParaAssinar() {
      setIsSubmitting(true);
      setStatusMessage('Enviando documento para assinatura...');

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

      const preparedBase64Pdf = adjustedBase64Pdf;

      try {
        const response = await fetch('/api/zapsign/criar-documento', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            base64_pdf: preparedBase64Pdf,
            emailDestinatario: '',
            surveyFlowConfig: surveyFlowConfigRef.current,
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          setStatusMessage(
            `Erro ao enviar documento: ${result.error || 'Tente novamente.'}`,
          );
          return;
        }

        setStatusMessage(
          'Documento enviado com sucesso. O fluxo de assinatura foi iniciado.',
        );

        // Opcional: você pode redirecionar para a página de assinatura
        if (result.data.signers && result.data.signers.length > 0) {
          const signUrl = result.data.signers[0].sign_url;
          // Descomentar se quiser redirecionar automaticamente:
          window.open(signUrl, '_blank');
        }
      } catch (error) {
        setStatusMessage(`Erro ao enviar documento: ${error}`);
      } finally {
        setIsSubmitting(false);
      }
    }

    model.onCurrentPageChanged.add(updateNavigationItems);
  }, [model, surveyDefinition, pdfFileName, surveyFlowConfig]);

  return (
    <div className="w-full">
      <Survey model={model} />
      {statusMessage ? (
        <div
          className={`fixed bottom-4 left-4 z-50 max-w-sm rounded-lg border px-4 py-3 text-sm shadow-lg ${
            isSubmitting
              ? 'border-blue-200 bg-blue-50 text-blue-700'
              : statusMessage.includes('Erro')
                ? 'border-red-200 bg-red-50 text-red-700'
                : 'border-green-200 bg-green-50 text-green-700'
          }`}
        >
          {statusMessage}
        </div>
      ) : null}
    </div>
  );
}
