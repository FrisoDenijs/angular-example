import { IMessageState } from '../message.interface';
import { MessagesActionsUnion, MessageActionTypes, Add } from '../message.action';

const initialState = '';

export const lastMessageReducer = (state = initialState, action: MessagesActionsUnion) => {
    switch (action.type) {
        case MessageActionTypes.ADD:
            return (<Add>action).payload.message;
        default:
            return state;
    }
};
