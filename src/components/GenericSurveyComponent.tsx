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

      const dataurlstring = await surveyPDF.raw('dataurlstring');

      const prefix = ';base64,';
      const prefixIndex = dataurlstring.indexOf(prefix);

      const base64Pdf =
        prefixIndex !== -1
          ? dataurlstring.substring(prefixIndex + prefix.length)
          : dataurlstring;

      console.log('PDF base64 ready for ZapSign:', base64Pdf.substring(0, 120));
      // TODO: montar o payload com base64_pdf e enviar para a API ZapSign.
    }

    model.onCurrentPageChanged.add(updateNavigationItems);
  }, [model, surveyDefinition, pdfFileName]);

  return <Survey model={model} />;
}
