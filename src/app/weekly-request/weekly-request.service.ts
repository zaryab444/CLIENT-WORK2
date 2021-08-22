import { Injectable } from '@angular/core';
import { Weekly } from '../models/weekly';

@Injectable({
  providedIn: 'root'
})
export class WeeklyRequestService {

  constructor() { }
  addWeeklyReq(user : Weekly){
    let users = [];
  if(localStorage.getItem('Weekly')){
  users =   JSON.parse(localStorage.getItem('Weekly') || '{}');

  users = [user, ...users];
  //already exist user and save multiple user in storage

  }

  else {
    users = [user];
    //if noo multiple user so assign new user array
  }
  localStorage.setItem('Weekly', JSON.stringify(users));
  }
}
