import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Internal } from '../models/request';
import { AlertifyService } from '../services/alertify.service';
import { InternalRequestService } from './internal-request.service';

@Component({
  selector: 'app-internal-request',
  templateUrl: './internal-request.component.html',
  styleUrls: ['./internal-request.component.scss']
})
export class InternalRequestComponent implements OnInit {
  proposalForm: FormGroup;
  user: Internal;
  userSubmitted: boolean


  constructor( private fb:FormBuilder, private proposalService: InternalRequestService, private alertifyService :AlertifyService) { }

  ngOnInit(): void {
    this.createProposalForm();

  }

  createProposalForm(){
    this.proposalForm =  this.fb.group(
      {
        projecttitle: new FormControl("", Validators.required),
        projectname: new FormControl("", [Validators.required]),
        projectdescription: new FormControl("", [Validators.required]),
        teamnumber: new  FormControl("", [Validators.required]),
        email1 : new FormControl("", [Validators.required , Validators.email]),
        email2 : new FormControl("", [Validators.required, Validators.email]),
        email3 : new FormControl(""),
        email4 : new FormControl(""),

        group1: new FormControl("", [Validators.required]),
        group2: new FormControl("", [Validators.required]),
        group3: new FormControl(""),
        group4: new  FormControl(""),
        cms1: new FormControl("", [Validators.required]),
        cms2: new FormControl("", [Validators.required]),
        cms3: new FormControl(""),
        cms4: new FormControl(""),
        supName: new  FormControl("", [Validators.required]),
        cosupname: new FormControl("", [Validators.required])


      });
  }

 //Getter methods for all form controls
 get projecttitle(){
  return this.proposalForm.get('projecttitle') as FormControl;
}

 get projectname(){
   return this.proposalForm.get('projectname') as FormControl;
 }

 get projectdescription(){
   return this.proposalForm.get('projectdescription') as FormControl;

 }

 get teamnumber(){
   return this.proposalForm.get('teamnumber') as FormControl;
 }

 get email1(){
  return this.proposalForm.get('email1') as FormControl;

 }
 get email2(){
  return this.proposalForm.get('email2') as FormControl;

 }
 get email3(){
  return this.proposalForm.get('email3') as FormControl;

 }
 get email4(){
  return this.proposalForm.get('email4') as FormControl;

 }

 get group1(){
   return this.proposalForm.get('group1') as FormControl
 }

 get group2(){
  return this.proposalForm.get('group2') as FormControl;
}

 get group3(){
   return this.proposalForm.get('group3') as FormControl;
 }

 get group4(){
   return this.proposalForm.get('group4') as FormControl;

 }

 get cms1(){
   return this.proposalForm.get('cms1') as FormControl;
 }

 get cms2(){
   return this.proposalForm.get('cms2') as FormControl
 }
//
get cms3(){
return this.proposalForm.get('cms3') as FormControl;
}

get cms4(){
 return this.proposalForm.get('cms4') as FormControl;
}

get supName(){
 return this.proposalForm.get('supName') as FormControl;

}

get cosupname(){
 return this.proposalForm.get('cosupname') as FormControl;
}


onSubmit(){
  console.log(this.proposalForm);
  this.userSubmitted = true;

  if(this.proposalForm.valid){
  // this.user = Object.assign(this.user, this.registerationForm.value);
  this.proposalService.addReq(this.userData());
  this.proposalForm.reset();
  this.userSubmitted = false;
 this.alertifyService.success('Successfully Submit');
  } else{
    this.alertifyService.error('Process Failed');
  }
}
userData(): Internal{
  return this.user = {

    projecttitle: this.projecttitle.value,
    projectname:this.projectname.value,
    projectdescription: this.projectdescription.value,
    teamnumber: this.teamnumber.value,
    email1:this.email1.value,
    email2:this.email1.value,
    email3:this.email1.value,
    email4:this.email1.value,
    group1: this.group1.value,
    group2:this.group2.value,
    group3: this.group3.value,
    group4: this.group4.value,
    cms1: this.cms1.value,
    cms2:this.cms2.value,
    cms3: this.cms3.value,
    cms4: this.cms4.value,
    supName: this.supName.value,
    cosupname: this.cosupname.value
  }
}


}
