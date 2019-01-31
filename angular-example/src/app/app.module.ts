import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { MessageComponent } from './message/message.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store/root.reducer';
import { IRootState } from './store/root.state';
import { EffectsModule } from '@ngrx/effects';
import { AsteroidEffects } from './store/asteroids/asteroid.effects';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    AsteroidsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot<IRootState>(rootReducer),
    EffectsModule.forRoot([AsteroidEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
