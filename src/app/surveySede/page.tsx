import SurveyWrapper from '@/components/SurveyWrapper';
import BackButton from '@/components/BackButton';
import { TipoSurvey } from '@/enums/TipoSurvey';

export default function SurveySede() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-24">
      <div className="mb-6">
        <BackButton />
      </div>

      <SurveyWrapper tipoSurvey={TipoSurvey.Sede} />
    </div>
  );
}
