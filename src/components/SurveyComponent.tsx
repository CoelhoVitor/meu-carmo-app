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
  surveyPDF.save('SolicitacaoAtividadeExterna');
}

export default function SurveyComponent() {
  const model = new Model(surveyJson);

  // model.addNavigationItem({
  //   id: 'pdf-export',
  //   title: 'Salvar como PDF',
  //   action: () => savePDF(model),
  // });

  return <Survey model={model} />;
}
