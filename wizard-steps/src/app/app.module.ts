import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardStepHostDirective } from './wizard/wizard-step-host/wizard-step-host.directive';
import { WizardNavigationComponent } from './wizard/wizard-navigation/wizard-navigation.component';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardStepHostDirective,
    WizardNavigationComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
