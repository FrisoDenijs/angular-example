import { Type } from '@angular/core';
import { Action } from '@ngrx/store';
import { IWizardStepComponent } from '../../shared';

export namespace WizardActions {
    export const NEXT_STEP = '[Wizard] NextStep';
    export const PREVIOUS_STEP = '[Wizard] PreviousStep';
    export const ADD_STEP = '[Wizard] AddStep';
    export const INITIALIZE = '[Wizard] Initialize';

    export class NextStep implements Action {
        readonly type = NEXT_STEP;
    }
    export class PreviousStep implements Action {
        readonly type = PREVIOUS_STEP;
    }
    export class AddStep implements Action {
        readonly type = ADD_STEP;
        payload: {
            componentType: Type<IWizardStepComponent>
        };

        constructor(componentType: Type<IWizardStepComponent>) {
            this.payload = {
                componentType
            };
        }
    }

    export class Initialize implements Action {
        readonly type = INITIALIZE;
    }

    export type Actions =
        | NextStep
        | PreviousStep
        | AddStep
        | Initialize;
}
