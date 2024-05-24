import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadUsers, getUserById, addUser, editUser, deleteUser } from '../../actions/users.actions';
import { Users } from 'src/app/models/users.model';
import { getUsers, selectedUser } from 'src/app/reducers/users.reducer';
import { Observable, filter, take } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any;
  public users$: Observable<Users[]> | undefined;

  public selectedUser: any;
  public selectedUser$: Observable<Users | null> | undefined;


  constructor(private store: Store<{ users: Users[] }>) { }

  ngOnInit(): void {
    this.getUsers();


    this.selectedUser$ = this.store.pipe(select(selectedUser), filter(user => user !== null));
    this.selectedUser$.subscribe(res => {
      this.selectedUser = res;
      console.log(this.selectedUser);
      alert(JSON.stringify(this.selectedUser))
    });

    this.users$ = this.store.pipe(select(getUsers), filter(user => user.length != 0));
    this.users$.subscribe(users => {
      this.users = users; // Update users array
      console.log(this.users);
    });

    // this.store.select(getUsers).subscribe(res=>{
    //   console.log(res);
    // })

   

  }

  getUsers() {
    this.store.dispatch(loadUsers());
  }

  getUserData(userId: any) {
    this.store.dispatch(getUserById({ userId: userId }));
  }


  addUserData() {
    let userData = {
      "userId": 1,
      "id": this.users.length + 1,
      "title": "Testing" + this.users.length + 1,
      "body": "abcdfeghijklmnop"
    }

    this.store.dispatch(addUser({ user: userData }));

  }


  editUserData(userId:any) {

    let userData = {
      "userId": 1,
      "id": userId,
      "title": "Testing" + userId,
      "body": "abcdfeghijklmnop"
    }

    this.store.dispatch(editUser({ user: userData }));

  }

  deleteUserData(userId:any) {
    this.store.dispatch(deleteUser({ userId: userId }));
  }

}
