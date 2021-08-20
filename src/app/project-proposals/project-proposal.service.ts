import { Injectable } from '@angular/core';
import {Proposal} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProjectProposalService {

  constructor() { }

  addUser(user : Proposal){
    let users = [];
  if(localStorage.getItem('Proposal')){
  users =   JSON.parse(localStorage.getItem('Proposal') || '{}');

  users = [user, ...users];
  //already exist user and save multiple user in storage

  }

  else {
    users = [user];
    //if noo multiple user so assign new user array
  }
  localStorage.setItem('Proposal', JSON.stringify(users));
  }
}
