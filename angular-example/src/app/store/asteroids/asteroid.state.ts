import { AsteroidRequest } from '../../shared';

export interface IAsteroidState {
    request: AsteroidRequest;
    data: string;
    error: boolean;
}
