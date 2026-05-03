'use client';

import { useMemo, useEffect } from 'react';
import { Action, Model } from 'survey-core';
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
    let saveAction: Action;
    let signAction: Action;

    const ensureNavigationActions = () => {
      if (!saveAction) {
        saveAction = model.addNavigationItem({
          id: saveItemId,
          title: 'Salvar como PDF',
          visible: false,
          action: () => savePDF(),
        });
      }

      if (!signAction) {
        signAction = model.addNavigationItem({
          id: signItemId,
          title: 'Assinar',
          visible: false,
          action: () => criarDocumentoParaAssinar(),
        });
      }
    };

    const updateNavigationItems = () => {
      ensureNavigationActions();

      const visible = model.isLastPage;

      if (saveAction) {
        saveAction.visible = visible;
      }

      if (signAction) {
        signAction.visible = visible;
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
      const prefix = 'data:application/pdf;base64,';
      const base64Pdf = dataurlstring.startsWith(prefix)
        ? dataurlstring.substring(prefix.length)
        : dataurlstring;

      console.log('PDF base64 ready for ZapSign:', base64Pdf.substring(0, 120));
      // TODO: montar o payload com base64_pdf e enviar para a API ZapSign.
    }

    // updateNavigationItems();

    model.onCurrentPageChanged.add(updateNavigationItems);
  }, [model, surveyDefinition, pdfFileName]);

  return <Survey model={model} />;
}
