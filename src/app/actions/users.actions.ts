import { createAction, props } from '@ngrx/store';
import { Users } from '../models/users.model';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: Users[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());

export const getUserById = createAction('[User] Get by Id', props<{ userId: number }>());
export const getUserByIdSuccess = createAction('[User] Get by Id Success', props<{ user: Users}>());
export const getUserByIdFailure = createAction('[User] Get User Failure', props<{ error: any }>());


export const addUser = createAction('[User] add User', props<{ user: Users }>());
export const addUserSuccess = createAction('[User] add User Success', props<{ user: Users }>());
export const addUserFailure = createAction('[User] add User Failure', props<{ error: any }>());


export const editUser = createAction('[User] edit User', props<{ user: Users }>());
export const editUsersSuccess = createAction('[User] edit User Success', props<{ user: Users }>());
export const editUsersFailure = createAction('[User] edit User Failure', props<{ error: any }>());


export const deleteUser = createAction('[User] delete User', props<{ userId: number }>());
export const deleteUsersSuccess = createAction('[User] delete User Success', props<{ userId: number }>());
export const deleteUsersFailure = createAction('[User] delete User Failure', props<{ error: any }>());