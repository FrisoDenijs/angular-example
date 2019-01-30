import { Action } from '@ngrx/store';

export enum MessageActionTypes {
    ADD = '[Message] ADD',
    REMOVE = '[Message] REMOVE'
}

export class Add implements Action {
    type = MessageActionTypes.ADD;
    payload: {
        message: string
    };
    constructor (message: string) {
        this.payload = {
            message
        };
    }
}

export class Remove implements Action {
    type = MessageActionTypes.REMOVE;
    // payload = code convention
    payload: {
        index: number
    };
    constructor (index: number) {
        this.payload = {
            index
        };
    }
}

export type MessagesActionsUnion = Add | Remove;
