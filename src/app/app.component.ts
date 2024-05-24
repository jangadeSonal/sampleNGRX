import { Component, OnInit } from '@angular/core';
import { AppState } from './app.states';
import { Store } from '@ngrx/store';
import * as fromActions from './actions/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NgRxSample';

  constructor(private store : Store<AppState>){}
  
  ngOnInit(): void {
    // this.store.dispatch(fromActions.loadUsersAction());
  }

  // constructor(){

  //   let data = [
  //     [],
  //     [ 'Name', 'Title', 'Company Name', 'Email', 'Mobile Number' ],
  //     [
  //       'Sonal',
  //       'TL',
  //       'Test HSM',
  //       'sonal.jangade@hsmedifice.com',
  //       9877665443
  //     ],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     []
  //   ]


  //   const collection = data.map((row,index) => {
  //     let record :any = {};
  //     if (row.length != 0) {
       
  //       row.forEach((cell, index) => {
    
  //         const column = data[1][index];
  //         const dbName = columnMapping[column];
          
  //         if (dbName && index > 0) {
  //           record[dbName] = cell;
  //         }
  //       });
     
  //       if(record){
  //         return record;
  //       } else {
  //         return null;
  //       }
  //     }
  //     return null;
  //   }).filter(item => item !== null);

  //   console.log(collection);
  // }



}
