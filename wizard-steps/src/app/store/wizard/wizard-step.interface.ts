import { Type } from '@angular/core';
import { IWizardStepComponent } from '../../shared';

export interface IWizardStep {
    number: number;
    componentType: Type<IWizardStepComponent>;
    isCurrent: boolean;
    isCompleted: boolean;
}
