'use client';

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/survey-core.css';
import { surveyJson } from '../../data/surveyJson';
import { SurveyPDF } from 'survey-pdf';

function savePDF(model: Model) {
  const surveyPDF = new SurveyPDF(surveyJson);
  surveyPDF.data = model.data;
  surveyPDF.readOnly = true;
  surveyPDF.save('SolicitacaoAtividade');
}

export default function SurveyComponent() {
  const model = new Model(surveyJson);

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
      model.removeNavigationItem('pdf-export');
    }
  });

  return <Survey model={model} />;
}
