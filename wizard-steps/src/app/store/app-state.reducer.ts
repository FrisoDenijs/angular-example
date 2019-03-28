import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app-state.interface';

export const AppStateReducer: ActionReducerMap<IAppState> = <ActionReducerMap<IAppState>> {}

/**
 * Injection token for root reducer dependency resolution. Needed for AOT to work.
 */
export const AppStateReducerToken = new InjectionToken<ActionReducerMap<IAppState>>('Registered Reducers');

/**
 * Provider for reducers, needed for AOT in combination with reducerToken.
 */
export const AppStateReducerProvider = { provide: AppStateReducerToken, useValue: AppStateReducer };
