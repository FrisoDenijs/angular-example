import { IMessageState } from './message.interface';
import { IAsteroidState } from './asteroids/asteroid.state';

export interface IRootState {
    // messageState: IMessageState;
    asteroidState: IAsteroidState;
}
