import { ActionReducerMap } from '@ngrx/store';

import { IMessageState } from './message.interface';
import { lastMessageReducer } from './last-message/last-message.reducer';
import { messageListReducer } from './message-list/message-list.reducer';

export const rootReducer: ActionReducerMap<IMessageState> = {
  lastMessage: lastMessageReducer,
  messageList: messageListReducer
};
