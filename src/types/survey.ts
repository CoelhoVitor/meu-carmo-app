/**
 * Type definitions for SurveyJS configuration
 * Provides type-safe interfaces for survey elements, panels, and definitions
 */

export type SurveyElementType =
  | 'text'
  | 'radiogroup'
  | 'checkbox'
  | 'file'
  | 'comment'
  | 'html'
  | 'panel';

export type PanelState = 'collapsed' | 'expanded' | 'default';

export type MaskType = 'currency' | 'datetime';

export interface MaskSettings {
  pattern?: string;
  min?: string | number;
  max?: string | number;
  prefix?: string;
  decimalSeparator?: string;
  thousandsSeparator?: string;
  saveMaskedValue?: boolean;
  precision?: number;
}

export interface ChoiceItem {
  value?: boolean | string | number;
  text?: string;
}

export interface SurveyElement {
  type: SurveyElementType;
  name: string;
  title?: string;
  isRequired?: boolean;
  requiredErrorText?: string;
  choices?: (string | ChoiceItem)[];
  maskType?: MaskType;
  maskSettings?: MaskSettings;
  showOtherItem?: boolean;
  otherText?: string;
  otherErrorText?: string;
  storeOthersAsComment?: boolean;
  waitForUpload?: boolean;
  allowMultiple?: boolean;
  storeDataAsText?: boolean;
  maxSize?: number;
  autoGrow?: boolean;
  maxLength?: number;
  html?: string;
  startWithNewLine?: boolean;
}

export interface SurveyPanel extends SurveyElement {
  type: 'panel';
  state?: PanelState;
  elements: SurveyElement[];
}

export interface SurveyPage {
  name?: string;
  title?: string;
  elements: (SurveyElement | SurveyPanel)[];
}

export interface SurveyDefinition {
  checkErrorsMode?: string;
  textUpdateMode?: string;
  pages: SurveyPage[];
}
