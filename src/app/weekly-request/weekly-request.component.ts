import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Weekly } from '../models/weekly';
import { AlertifyService } from '../services/alertify.service';
import { WeeklyRequestService } from './weekly-request.service';

@Component({
  selector: 'app-weekly-request',
  templateUrl: './weekly-request.component.html',
  styleUrls: ['./weekly-request.component.scss']
})
export class WeeklyRequestComponent implements OnInit {
  mytime: Date = new Date();
  proposalForm: FormGroup;
  user: Weekly;
  userSubmitted: boolean
  constructor( private fb:FormBuilder, private proposalService: WeeklyRequestService, private alertifyService :AlertifyService) { }

  ngOnInit(): void {
    this.createRequestForm();
  }

  createRequestForm(){
  this.proposalForm =  this.fb.group(
    {
      date: new FormControl("", Validators.required),
      time: new FormControl("", [Validators.required]),
      supname: new FormControl("", [Validators.required]),
      cosupname: new  FormControl("", [Validators.required]),
      studname: new FormControl("", [Validators.required]),
      projtitle: new FormControl("", [Validators.required]),



    });

  }

//Getter methods for all form controls
get date(){
  return this.proposalForm.get('date') as FormControl;
}

 get time(){
   return this.proposalForm.get('time') as FormControl;
 }

 get supname(){
   return this.proposalForm.get('supname') as FormControl;

 }

 get cosupname(){
   return this.proposalForm.get('cosupname') as FormControl;
 }
 get studname(){
  return this.proposalForm.get('studname') as FormControl;
}
get projtitle(){
  return this.proposalForm.get('projtitle') as FormControl;
}

onSubmit(){
  console.log(this.proposalForm);
  this.userSubmitted = true;

  if(this.proposalForm.valid){
  // this.user = Object.assign(this.user, this.registerationForm.value);
  this.proposalService.addWeeklyReq(this.userData());
  this.proposalForm.reset();
  this.userSubmitted = false;
 this.alertifyService.success('Successfully Submit');
  } else{
    this.alertifyService.error('Process Failed');
  }
}

userData(): Weekly{
  return this.user = {

    date: this.date.value,
    time:this.time.value,
    supname: this.supname.value,
    cosupname: this.cosupname.value,
    studname: this.studname.value,
    projtitle:this.projtitle.value,

  }
}


}
