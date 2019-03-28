import { IWizardStep } from './wizard-step.interface';

export interface IWizard {
    steps: IWizardStep[];
    showNext: boolean;
    showPrevious: boolean;
    showStop: boolean;
    showSave: boolean;
    completed: boolean;
}
