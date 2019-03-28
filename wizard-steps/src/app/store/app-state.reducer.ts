import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app-state.interface';
import { wizardReducer } from './wizard/wizard.reducer';

export const AppStateReducer: ActionReducerMap<IAppState> = <ActionReducerMap<IAppState>> {
    wizard: wizardReducer
};

/**
 * Injection token for root reducer dependency resolution. Needed for AOT to work.
 */
export const AppStateReducerToken = new InjectionToken<ActionReducerMap<IAppState>>('Registered Reducers');

/**
 * Provider for reducers, needed for AOT in combination with reducerToken.
 */
export const AppStateReducerProvider = { provide: AppStateReducerToken, useValue: AppStateReducer };
