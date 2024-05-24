import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom, filter, switchMap } from 'rxjs/operators';
import { loadUsers, loadUsersSuccess, loadUsersFailure, getUserById, getUserByIdSuccess, getUserByIdFailure, addUser, addUserSuccess, addUserFailure, editUser, editUsersSuccess, editUsersFailure, deleteUser, deleteUsersSuccess, deleteUsersFailure } from '../actions/users.actions';
import { UsersService } from '../services/users.service';
import { AppState } from '../app.states';
import { Store, select } from '@ngrx/store';
import { getUsers } from '../reducers/users.reducer';
import { Users } from '../models/users.model';

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private userService: UsersService,
    private store : Store<AppState>
  ) { }


  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    withLatestFrom(this.store.pipe(select(getUsers))),
    filter(([action, users]) => users.length === 0), // Check if users already loaded
    mergeMap(() => this.userService.getAllUsers()
      .pipe(
        map(users => loadUsersSuccess({ users })),
        catchError(error => of(loadUsersFailure({ error })))
      ))
    )
  );

  // loadUsers$ = createEffect(() => this.actions$.pipe(
  //   ofType(loadUsers),
  //   mergeMap(() => this.userService.getAllUsers()
  //     .pipe(
  //       map(users => loadUsersSuccess({ users })),
  //       catchError(error => of(loadUsersFailure({ error })))
  //     ))
  //   )
  // );

  getUsersById$ = createEffect(() => this.actions$.pipe(
    ofType(getUserById),
    switchMap(({ userId }) => this.userService.getUsersById(userId)
      .pipe(
        map((user:any) => getUserByIdSuccess({user})),
        catchError(error => of(getUserByIdFailure({ error })))
      ))
    )
  );


 addUser$ = createEffect(() => this.actions$.pipe(
    ofType(addUser),
    switchMap(({ user }) => this.userService.createUser(user)
      .pipe(
        map((newUser:Users) => addUserSuccess({ user: newUser })),
        catchError(error => of(addUserFailure({ error })))
      ))
    )
  );

  editUser$ = createEffect(() => this.actions$.pipe(
    ofType(editUser),
    switchMap(({ user }) => this.userService.editUser(user)
      .pipe(
        map((editUser:Users) => editUsersSuccess({ user: editUser })),
        catchError(error => of(editUsersFailure({ error })))
      ))
    )
  );

  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType(deleteUser),
    switchMap(({ userId }) => this.userService.deleteUser(userId)
      .pipe(
        map(() => deleteUsersSuccess({ userId: userId })),
        catchError(error => of(deleteUsersFailure({ error })))
      ))
    )
  );
  
}