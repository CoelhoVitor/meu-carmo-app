import SurveyWrapper from '@/components/SurveyWrapper';
import { TipoSurvey } from '@/enums/TipoSurvey';

export default function SurveyElo() {
  return (
    <div className="flex min-h-screen flex-col items-center p-8 mt-20">
      <SurveyWrapper tipoSurvey={TipoSurvey.Elo} />
    </div>
  );
}
