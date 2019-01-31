import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AsteroidService } from 'src/app/shared';
import { GetComplete, GetError, AsteroidActionTypes, Get } from './asteroid.action';


@Injectable()
export class AsteroidEffects {

  constructor(
    private readonly asteroidService: AsteroidService,
    private readonly actions$: Actions) { }

  @Effect()
  get$: Observable<GetComplete | GetError> = this.actions$.pipe(
    ofType<Get>(AsteroidActionTypes.GET),
    mergeMap(action =>
      this.asteroidService.getAsteroids(action.payload.request).pipe(
        // If successful, dispatch success action with result
        map((obj: Object) => new GetComplete(JSON.stringify(obj))),
        // If request fails, dispatch failed action
        catchError(() => of(new GetError()))
      )
    )
  );
}
