import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app.states';
import { articleReducer } from './article.reducer';
import { userReducer } from './users.reducer';

export const reducers: ActionReducerMap<AppState> = {
  articleState: articleReducer,
  userState: userReducer
}; 