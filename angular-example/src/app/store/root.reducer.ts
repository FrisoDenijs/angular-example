import { ActionReducerMap } from '@ngrx/store';
import { IRootState } from './root.state';
import { asteroidReducer } from './asteroids/asteroid.reducer';
import { messageReducer } from './message.reducer';

export const rootReducer: ActionReducerMap<IRootState> = {
  messageState: messageReducer,
  asteroidState: asteroidReducer
};
