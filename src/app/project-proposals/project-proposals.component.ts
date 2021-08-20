import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Proposal } from '../models/user';
import { AlertifyService } from '../services/alertify.service';
import { ProjectProposalService } from './project-proposal.service';

@Component({
  selector: 'app-project-proposals',
  templateUrl: './project-proposals.component.html',
  styleUrls: ['./project-proposals.component.scss']
})
export class ProjectProposalsComponent implements OnInit {

  proposalForm: FormGroup;
  user: Proposal;
  userSubmitted: boolean


  constructor( private fb:FormBuilder, private proposalService: ProjectProposalService, private alertifyService :AlertifyService) { }

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
        group1: new FormControl("", [Validators.required]),
        group2: new FormControl("", [Validators.required]),
        group3: new FormControl("", [Validators.required]),
        group4: new  FormControl("", [Validators.required]),
        cms1: new FormControl("", [Validators.required]),
        cms2: new FormControl("", [Validators.required]),
        cms3: new FormControl("", [Validators.required]),
        cms4: new FormControl("", [Validators.required]),
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
  this.proposalService.addUser(this.userData());
  this.proposalForm.reset();
  this.userSubmitted = false;
 this.alertifyService.success('Successfully Submit');
  } else{
    this.alertifyService.error('Process Failed');
  }
}

userData(): Proposal{
  return this.user = {

    projecttitle: this.projecttitle.value,
    projectname:this.projectname.value,
    projectdescription: this.projectdescription.value,
    teamnumber: this.teamnumber.value,
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
