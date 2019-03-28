import { IWizard } from './wizard.interface';
import { WizardActions } from './wizard.actions';
import { IWizardStep } from './wizard-step.interface';

const initialState = <IWizard>{
    steps: [],
    showNext: true,
    showPrevious: false,
    showStop: true,
    showSave: false,
    completed: false
};
/**
 * Reducer function to handle the wizard step states
 */
export const wizardReducer = (
    state: IWizard = initialState,
    action: WizardActions.Actions): IWizard => {
    let currentStepNumber = 0;
    if (state && state.steps) {
        const currentStep = state.steps.find(s => s.isCurrent);
        if (currentStep) {
            currentStepNumber = currentStep.number;
        }
    }
    switch (action.type) {
        case WizardActions.INITIALIZE:
            return initialState;
        case WizardActions.ADD_STEP:
            const stepNumber = state.steps.length + 1;
            return {
                ...state,
                steps: [
                    ...state.steps,
                    <IWizardStep>{
                        number: stepNumber,
                        isCurrent: stepNumber === 1,
                        componentType: action.payload.componentType
                    }
                ]
            };
        case WizardActions.NEXT_STEP:
            return {
                ...state,
                // set one step to visible, others to invisible
                steps: state.steps.map(
                    (step) => <IWizardStep>{
                        ...step,
                        isCurrent: step.number === currentStepNumber + 1,
                        isCompleted: step.number < currentStepNumber + 1
                    }
                ),
                showNext: currentStepNumber + 1 !== state.steps.length && !(currentStepNumber + 1 > state.steps.length),
                showPrevious: true && !(currentStepNumber + 1 > state.steps.length),
                showStop: false,
                showSave: currentStepNumber + 1 === state.steps.length,
                completed: state.steps.length > 0 && currentStepNumber + 1 > state.steps.length
            };
        case WizardActions.PREVIOUS_STEP:
            return {
                ...state,
                // set one step to visible, others to invisible
                steps: state.steps.map(
                    (step) => <IWizardStep>{
                        ...step,
                        isCurrent: step.number === currentStepNumber - 1,
                        isCompleted: step.number < currentStepNumber - 1
                    }
                ),
                showNext: true,
                showPrevious: currentStepNumber - 1 > 1,
                showStop: currentStepNumber - 1 === 1,
                showSave: false,
                completed: false
            };
        default:
            return state;
    }
};
