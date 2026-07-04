'use client';

import dynamic from 'next/dynamic';
import { TipoSurvey } from '@/enums/TipoSurvey';
import { getSurveyFlowConfig } from '@/utils/surveyFlow';

const GenericSurveyComponent = dynamic(
  () => import('./GenericSurveyComponent'),
  {
    ssr: false,
  },
);

export default function SurveyWrapper({
  tipoSurvey,
}: {
  tipoSurvey: TipoSurvey;
}) {
  const config = getSurveyFlowConfig(tipoSurvey);

  return (
    <GenericSurveyComponent
      surveyDefinition={config.surveyDefinition}
      pdfFileName={config.pdfFileName}
      surveyFlowConfig={config}
    />
  );
}
