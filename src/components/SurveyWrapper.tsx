'use client';

import dynamic from 'next/dynamic';
import { TipoSurvey } from '@/enums/TipoSurvey';

const SurveySedeComponent = dynamic(() => import('./SurveySedeComponent'), {
  ssr: false,
});

const SurveyEloComponent = dynamic(() => import('./SurveyEloComponent'), {
  ssr: false,
});

export default function SurveyWrapper({
  tipoSurvey,
}: {
  tipoSurvey: TipoSurvey;
}) {
  switch (tipoSurvey) {
    case TipoSurvey.Sede:
      return <SurveySedeComponent />;
    case TipoSurvey.Elo:
      return <SurveyEloComponent />;
  }
}
