import { MessagesActionsUnion, MessageActionTypes, Add, Remove } from '../message.action';

const initialState = new Array<string>();

export const messageListReducer = (state = initialState, action: MessagesActionsUnion) => {
    switch (action.type) {
        case MessageActionTypes.ADD:
            return [
                ...state,
                (<Add>action).payload.message
            ];
        case MessageActionTypes.REMOVE:
            return state.filter((value, index) => {
                return index !== (<Remove>action).payload.index;
            });
        default:
            return state;
    }
};
