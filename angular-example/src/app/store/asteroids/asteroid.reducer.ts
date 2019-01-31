import { IAsteroidState } from './asteroid.state';
import { AsteroidActionsUnion, AsteroidActionTypes } from './asteroid.action';

const initialState = <IAsteroidState>{
    request: null,
    data: '',
    error: false
};

export const asteroidReducer = (state = initialState, action: AsteroidActionsUnion) => {
    switch (action.type) {
        case AsteroidActionTypes.GET:
            return {
                ...state,
                request: action.payload.request
            };
        case AsteroidActionTypes.GET_COMPLETE:
            return {
                ...state,
                data: action.payload.data,
                error: false
            };
        case AsteroidActionTypes.GET_ERROR:
            return {
                ...state,
                data: '',
                error: true
            };
        default:
            return state;
    }
};
