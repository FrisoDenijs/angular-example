import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mfd-wizard-navigation',
  templateUrl: './wizard-navigation.component.html',
  styleUrls: ['./wizard-navigation.component.css']
})
export class WizardNavigationComponent {

  @Input()
  public showNext: boolean;
  @Input()
  public showPrevious: boolean;
  @Input()
  public showStop: boolean;
  @Input()
  public showSave: boolean;

  @Output()
  public nextStep = new EventEmitter<void>();

  @Output()
  public previousStep = new EventEmitter<void>();

  @Output()
  public stop = new EventEmitter<void>();

  /**
  * Go to next step of wizard
  */
  public onNextClick() {
    if (this.showNext || this.showSave) {
      this.nextStep.emit();
    }
  }

  /**
  * Go to previous step of wizard
  */
  public onPreviousClick() {
    if (this.showPrevious) {
      this.previousStep.emit();
    }
  }

  /**
  * Stop the wizard
  */
  public onStopClick() {
    if (this.showStop) {
      this.stop.emit();
    }
  }

}
