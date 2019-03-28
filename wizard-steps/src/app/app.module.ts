import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardStepHostDirective } from './wizard/wizard-step-host/wizard-step-host.directive';
import { WizardNavigationComponent } from './wizard/wizard-navigation/wizard-navigation.component';
import { WizardComponent } from './wizard/wizard.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppStateReducerToken, AppStateReducerProvider } from './store';
import { WizardStepIndicatorComponent } from './wizard/wizard-step-indicator/wizard-step-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardStepHostDirective,
    WizardNavigationComponent,
    WizardComponent,
    WizardStepIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppStateReducerToken),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [AppStateReducerProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
