import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { Internal } from './Internal';
import { InternalRequestService } from './internal-request.service';

@Component({
  selector: 'app-internal-request',
  templateUrl: './internal-request.component.html',
  styleUrls: ['./internal-request.component.scss']
})
export class InternalRequestComponent implements OnInit {
  internalForm: FormGroup;
  user: Internal;
  userSubmitted: boolean


  constructor( private fb:FormBuilder, private internalService: InternalRequestService, private alertifyService :AlertifyService) { }

  ngOnInit(): void {
    this.createInternalForm();

  }

  createInternalForm(){
    this.internalForm =  this.fb.group(
      {
        projectTitle: new FormControl("", Validators.required),
        projectName: new FormControl("", [Validators.required]),
        projectDescription: new FormControl("", [Validators.required]),
        teamMembers: new  FormControl("", [Validators.required]),
        groupMember1 : new FormControl("", [Validators.required ]),
        groupMember2 : new FormControl("", [Validators.required]),
        groupMember3 : new FormControl(""),
        groupMember4 : new FormControl(""),

        cmsID1: new FormControl("", [Validators.required]),
        cmsID2: new FormControl("", [Validators.required]),
        cmsID3: new FormControl(""),
        cmsID4: new  FormControl(""),
        emailID1: new FormControl("", [Validators.required,Validators.email]),
        emailID2: new FormControl("", [Validators.required, Validators.email]),
        emailID3: new FormControl("", [Validators.email]),
        emailID4: new FormControl("", [Validators.email]),
        SupName: new  FormControl("", [Validators.required]),
        CoSupName: new FormControl("", [Validators.required])


      });
  }

  get projectTitle(){
    return this.internalForm.get('projectTitle') as FormControl;
  }

  get projectName(){
    return this.internalForm.get('projectName') as FormControl;
  }

  get projectDescription(){
    return this.internalForm.get('projectDescription') as FormControl;
  }

  get teamMembers(){
    return this.internalForm.get('teamMembers') as FormControl;
  }

  get groupMember1(){
    return this.internalForm.get('groupMember1') as FormControl;
  }

  get groupMember2(){
    return this.internalForm.get('groupMember2') as FormControl;
  }

  get groupMember3(){
    return this.internalForm.get('groupMember3') as FormControl;
  }

  get groupMember4(){
    return this.internalForm.get('groupMember4') as FormControl;
  }

  get cmsID1(){
    return this.internalForm.get('cmsID1') as FormControl;
  }

  get cmsID2(){
    return this.internalForm.get('cmsID2') as FormControl;
  }

  get cmsID3(){
    return this.internalForm.get('cmsID3') as FormControl;
  }

  get cmsID4(){
    return this.internalForm.get('cmsID4') as FormControl;
  }

  get emailID1(){
    return this.internalForm.get('emailID1') as FormControl;
  }

  get emailID2(){
    return this.internalForm.get('emailID2') as FormControl;
  }

  get emailID3(){
    return this.internalForm.get('emailID3') as FormControl;
  }

  get emailID4(){
    return this.internalForm.get('emailID4') as FormControl;
  }

  get SupName(){
    return this.internalForm.get('SupName') as FormControl;
  }
  get CoSupName(){
    return this.internalForm.get('CoSupName') as FormControl;
  }




onSubmit(): any {
  this.internalService.AddRequest(this.internalForm.value)
  .subscribe(() => {
      console.log('Data added successfully!')
      this.internalForm.reset();
      this.userSubmitted = false;
      this.alertifyService.success('Successfully Submit');
    }, (err) => {
      console.log(err);
  });
}








}
