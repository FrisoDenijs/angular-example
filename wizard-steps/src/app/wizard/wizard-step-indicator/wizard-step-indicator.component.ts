import { Component, Input } from '@angular/core';
import { IWizardStep } from '../../store/wizard/wizard-step.interface';

@Component({
  selector: 'mfd-wizard-step-indicator',
  templateUrl: './wizard-step-indicator.component.html',
  styleUrls: ['./wizard-step-indicator.component.css']
})
export class WizardStepIndicatorComponent {

  @Input()
  public steps: IWizardStep[];

}
