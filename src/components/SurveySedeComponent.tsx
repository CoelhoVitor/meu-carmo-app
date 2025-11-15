'use client';

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/survey-core.css';
import { surveySede } from '../../data/surveySede';
import { SurveyPDF } from 'survey-pdf';

function savePDF(model: Model) {
  const surveyPDF = new SurveyPDF(surveySede);
  surveyPDF.data = model.data;
  surveyPDF.readOnly = true;
  surveyPDF.save('SolicitacaoAtividade');
}

export default function SurveySedeComponent() {
  const model = new Model(surveySede);

  model.showCompleteButton = false;
  model.showCompletePage = false;

  model.onCurrentPageChanged.add((sender) => {
    if (sender.isLastPage) {
      model.addNavigationItem({
        id: 'pdf-export',
        title: 'Salvar como PDF',
        action: () => savePDF(model),
      });
    } else {
    }
  });

  return <Survey model={model} />;
}
