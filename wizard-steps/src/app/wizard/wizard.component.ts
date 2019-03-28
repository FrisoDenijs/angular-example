import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input, Type, EventEmitter, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WizardStepHostDirective } from './wizard-step-host/wizard-step-host.directive';
import { IWizardStepComponent } from '../shared';
import { IAppState } from '../store';
import { WizardActions } from '../store/wizard/wizard.actions';
import { IWizardStep } from '../store/wizard/wizard-step.interface';

@Component({
  selector: 'mfd-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  public steps$: Observable<IWizardStep[]>;
    public showNext$: Observable<boolean>;
    public showPrevious$: Observable<boolean>;
    public showStop$: Observable<boolean>;
    public showSave$: Observable<boolean>;

    public currentStep: IWizardStep;
    public currentStepInstance: IWizardStepComponent;

    @Output()
    public stopWizard: EventEmitter<void> = new EventEmitter<void>();

    @Input()
    public stepComponents: Type<IWizardStepComponent>[];

    @Input()
    public showNavigation: boolean;

    @ViewChild(WizardStepHostDirective)
    public wizardStepHost: WizardStepHostDirective;

    constructor(
        private readonly store: Store<IAppState>,
        private componentFactoryResolver: ComponentFactoryResolver) {
        this.steps$ = this.store.pipe(
            select(/* s => s.form.wizard.steps */),
            tap((steps) => {
                this.loadStepComponent(steps.find(step => step.isCurrent));
            })
        );
        // Track button state
        this.showNext$ = this.store.pipe(select(/* s => s.form.wizard.showNext */));
        this.showPrevious$ = this.store.pipe(select(/* s => s.form.wizard.showPrevious */));
        this.showStop$ = this.store.pipe(select(/* s => s.form.wizard.showStop */));
        this.showSave$ = this.store.pipe(select(/* s => s.form.wizard.showSave */));
    }

    public ngOnInit(): void {
        // remove existing steps from state
        this.store.dispatch(new WizardActions.Initialize());
        this.stepComponents.forEach(componentType => {
            this.store.dispatch(new WizardActions.AddStep(componentType));
        });
    }

    private loadStepComponent(step: IWizardStep) {
        if (this.currentStep !== step) {
            this.currentStep = step;
            if (!this.currentStep) {
                return;
            }

            const componentFactory = this
                .componentFactoryResolver
                .resolveComponentFactory(this.currentStep.componentType);

            const viewContainerRef = this.wizardStepHost.viewContainerRef;
            viewContainerRef.clear();
            const componentRef = viewContainerRef.createComponent(componentFactory);
            this.currentStepInstance = componentRef.instance;
        }
    }

    public onNextStep(): void {
        this.currentStepInstance.complete();
        this.scrollToTop();
    }

    public onPreviousStep(): void {
        this.store.dispatch(new WizardActions.PreviousStep());
        this.scrollToTop();
    }

    public onStop(): void {
        this.stopWizard.emit();
    }

    public scrollToTop(): void {
      /* document.scrollingElement is not supported in IE
       * document.body.scrollTop works in Safari and Opera, but not in Chrome 61+
       * (https://stackoverflow.com/questions/45061901/chrome-61-body-doesnt-scroll)
       * this construction should work for most modern browsers
       */
      (document.scrollingElement || document.documentElement || document.body).scrollTop = 0;
  }
}
