export interface IWizardStepComponent {
    isValid(): boolean;
    complete(): void;
}
