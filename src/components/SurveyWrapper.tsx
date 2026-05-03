'use client';

import dynamic from 'next/dynamic';
import { TipoSurvey } from '@/enums/TipoSurvey';
import { surveyElo } from '../../data/surveyElo';
import { surveySede } from '../../data/surveySede';

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
  switch (tipoSurvey) {
    case TipoSurvey.Sede:
      return (
        <GenericSurveyComponent
          surveyDefinition={surveySede}
          pdfFileName="SolicitacaoAtividade - Sede"
        />
      );
    case TipoSurvey.Elo:
      return (
        <GenericSurveyComponent
          surveyDefinition={surveyElo}
          pdfFileName="SolicitacaoAtividade - Elo"
        />
      );
  }
}
