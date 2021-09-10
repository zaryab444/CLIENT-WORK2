import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Weekly } from './Weekly';
import { AlertifyService } from '../services/alertify.service';
import { WeeklyRequestService } from './weekly-request.service';

@Component({
  selector: 'app-weekly-request',
  templateUrl: './weekly-request.component.html',
  styleUrls: ['./weekly-request.component.scss']
})
export class WeeklyRequestComponent implements OnInit {
  mytime: Date = new Date();
  weeklyForm: FormGroup;
  user: Weekly;
  userSubmitted: boolean
  constructor( private fb:FormBuilder, private WeeklyRequestService: WeeklyRequestService, private alertifyService :AlertifyService) { }

  ngOnInit(): void {
    this.createRequestForm();
  }

  createRequestForm(){
  this.weeklyForm =  this.fb.group(
    {
      Pickerdate: new FormControl("", Validators.required),
      time: new FormControl("", [Validators.required]),
      SupName: new FormControl("", [Validators.required]),
      Cosupname: new  FormControl("", [Validators.required]),
      StudentName: new FormControl("", [Validators.required]),
      projTitle: new FormControl("", [Validators.required]),



    });

  }

//Getter methods for all form controls
get Pickerdate(){
  return this.weeklyForm.get('Pickerdate') as FormControl;
}

 get time(){
   return this.weeklyForm.get('time') as FormControl;
 }

 get SupName(){
   return this.weeklyForm.get('SupName') as FormControl;

 }

 get Cosupname(){
   return this.weeklyForm.get('Cosupname') as FormControl;
 }
 get StudentName(){
  return this.weeklyForm.get('StudentName') as FormControl;
}
get projTitle(){
  return this.weeklyForm.get('projTitle') as FormControl;
}

onSubmit(): any {
  this.WeeklyRequestService.AddWeekly(this.weeklyForm.value)
  .subscribe(() => {
      console.log('Data added successfully!')
      this.weeklyForm.reset();
      this.userSubmitted = false;
      this.alertifyService.success('Successfully Submit');
    }, (err) => {
      console.log(err);
  });
}



}
