import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mfdWizardStepHost]'
})
export class WizardStepHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
