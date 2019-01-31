import { Action } from '@ngrx/store';
import { AsteroidRequest } from '../../shared';

export enum AsteroidActionTypes {
    GET = '[GET] asteroids',
    GET_COMPLETE  = '[GET Complete] asteroids',
    GET_ERROR = '[GET Error] asteroids'
}

export class Get {
    readonly type = AsteroidActionTypes.GET;
    payload: {
        request: AsteroidRequest
    };
    constructor(request: AsteroidRequest) {
        this.payload = {
            request
        };
    }
}

export class GetComplete {
    readonly type = AsteroidActionTypes.GET_COMPLETE;
    payload: {
        data: string
    };
    constructor(data: string) {
        this.payload = {
            data
        };
    }
}

export class GetError {
    readonly type = AsteroidActionTypes.GET_ERROR;
}

export type AsteroidActionsUnion = Get | GetComplete | GetError;
