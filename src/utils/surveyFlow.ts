import { TipoSurvey } from '@/enums/TipoSurvey';
import { surveyElo } from '@/data/surveyElo';
import { surveySede } from '@/data/surveySede';
import { SurveyDefinition } from '@/types/survey';

interface SignerDefaultConfig {
  name: string;
  email: string;
  authMode: string;
  sendAutomaticEmail: boolean;
}

export interface SignerDefaults {
  chefe: SignerDefaultConfig;
  diretoria: SignerDefaultConfig;
}

export interface SurveyFlowConfig {
  type: TipoSurvey;
  title: string;
  documentName: string;
  pdfFileName: string;
  surveyDefinition: SurveyDefinition;
  signerDefaults: SignerDefaults;
}

const baseSignerDefaults: SignerDefaults = {
  chefe: {
    name: 'Chefe',
    email: '',
    authMode: 'assinaturaTela',
    sendAutomaticEmail: false,
  },
  diretoria: {
    name: 'Diretoria',
    email: 'diretoria@gemarcarmo.org.br',
    authMode: 'tokenEmail',
    sendAutomaticEmail: true,
  },
};

function createSignerDefaults(): SignerDefaults {
  return {
    chefe: { ...baseSignerDefaults.chefe },
    diretoria: { ...baseSignerDefaults.diretoria },
  };
}

const surveyFlowConfigByType: Record<TipoSurvey, SurveyFlowConfig> = {
  [TipoSurvey.Sede]: {
    type: TipoSurvey.Sede,
    title: 'Sede',
    documentName: 'Solicitação de Atividade - Sede',
    pdfFileName: 'SolicitacaoAtividade - Sede',
    surveyDefinition: surveySede,
    signerDefaults: createSignerDefaults(),
  },
  [TipoSurvey.Elo]: {
    type: TipoSurvey.Elo,
    title: 'ELO',
    documentName: 'Solicitação de Atividade - ELO',
    pdfFileName: 'SolicitacaoAtividade - Elo',
    surveyDefinition: surveyElo,
    signerDefaults: createSignerDefaults(),
  },
};

export function getSurveyFlowConfig(tipoSurvey: TipoSurvey): SurveyFlowConfig {
  return (
    surveyFlowConfigByType[tipoSurvey] ?? surveyFlowConfigByType[TipoSurvey.Elo]
  );
}
