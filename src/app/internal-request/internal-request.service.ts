import { Injectable } from '@angular/core';
import { Internal } from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class InternalRequestService {

  constructor() { }
  addReq(user : Internal){
    let users = [];
  if(localStorage.getItem('Internal')){
  users =   JSON.parse(localStorage.getItem('Internal') || '{}');

  users = [user, ...users];
  //already exist user and save multiple user in storage

  }

  else {
    users = [user];
    //if noo multiple user so assign new user array
  }
  localStorage.setItem('Internal', JSON.stringify(users));
  }

}
