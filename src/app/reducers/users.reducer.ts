import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure, getUserById, getUserByIdSuccess, getUserByIdFailure, addUser, addUserSuccess, addUserFailure, editUser, editUsersSuccess, editUsersFailure, deleteUser, deleteUsersSuccess, deleteUsersFailure } from '../actions/users.actions';
import { AppState, UserState } from '../app.states'


export const initialState: UserState = {
    users: [],
    selectedUser: null,
    loading: false,
    message: null
};

export const userReducer = createReducer(
    initialState,
    on(loadUsers, state => ({
        ...state,
        loading: true,
        message: null
    })),
    on(loadUsersSuccess, (state, { users }) => ({
        ...state,
        users,
        loading: false,
        message: 'Success'
    })),
    on(loadUsersFailure, (state, { error }) => ({
        ...state,
        loading: false,
        message: error
    })),


    on(getUserById, state => ({
        ...state,
        loading: true,
        message: null
    })),
    on(getUserByIdSuccess, (state, { user }) => ({
        ...state,
        selectedUser: state.users.find(allUser => allUser.id === user.id) || null,
        loading: false,
        message: 'Success'
    })),
    on(getUserByIdFailure, (state, { error }) => ({
        ...state,
        loading: false,
        message: error
    })),


    on(addUser, state => ({
        ...state,
        loading: true,
        message: null
    })),
    on(addUserSuccess, (state, { user }) => ({
        ...state,
        users: [...state.users, user],
        loading: false,
        message: 'Success'
    })),
    on(addUserFailure, (state, { error }) => ({
        ...state,
        loading: false,
        message: error
    })),

    on(editUser, state => ({
        ...state,
        loading: true,
        message: null
    })),
    on(editUsersSuccess, (state, { user }) => ({
        ...state,
        users: state.users.map(u => u.id === user.id ? user : u),
        loading: false,
        message: 'Success'
    })),
    on(editUsersFailure, (state, { error }) => ({
        ...state,
        loading: false,
        message: error
    })),

    on(deleteUser, state => ({
        ...state,
        loading: true,
        message: null
    })),
    on(deleteUsersSuccess, (state, { userId }) => ({
        ...state,
        users: state.users.filter(u => u.id !== userId),
        loading: false,
        message: 'Success'
    })),
    on(deleteUsersFailure, (state, { error }) => ({
        ...state,
        loading: false,
        message: error
    }))
);

// // Creating selectors
export const getUserState = createFeatureSelector<UserState>('userState');

export const selectUsers = (state: UserState) => state.users;

export const getUsers = createSelector(
    getUserState,
    (state: UserState) => state.users
);

export const getMessage = createSelector(
    getUserState,
    (state: UserState) => state.message
);

export const selectedUser = createSelector(
    getUserState,
    state => state.selectedUser
);


