import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Proposal } from './Proposal';
import { AlertifyService } from '../services/alertify.service';
import { ProjectProposalService } from './project-proposal.service';

@Component({
  selector: 'app-project-proposals',
  templateUrl: './project-proposals.component.html',
  styleUrls: ['./project-proposals.component.scss']
})
export class ProjectProposalsComponent implements OnInit {

  proposalForm: FormGroup;

  userSubmitted: boolean;

  constructor( private fb:FormBuilder, private proposalService: ProjectProposalService, private alertifyService :AlertifyService) { }

  ngOnInit(): void {
    this.createProposalForm();
  }

  createProposalForm(){
    this.proposalForm =  this.fb.group(
      {
        ProjTitle: new FormControl("", Validators.required),
        ProjName: new FormControl("", [Validators.required]),
        ProjDesc: new FormControl("", [Validators.required]),
        TeamMember: new  FormControl("", [Validators.required]),
        GroupMem1: new FormControl("", [Validators.required]),
        GroupMem2: new FormControl("", [Validators.required]),
        GroupMem3: new FormControl(""),
        GroupMem4: new  FormControl(""),
        cmsId1: new FormControl("", [Validators.required]),
        cmsId2: new FormControl("", [Validators.required]),
        cmsId3: new FormControl(""),
        cmsId4: new FormControl(""),
        SupName: new  FormControl("", [Validators.required]),
        CoSupname: new FormControl("", [Validators.required])


      });
  }

  get ProjTitle(){
    return this.proposalForm.get('ProjTitle') as FormControl;
  }

   get ProjName(){
     return this.proposalForm.get('ProjName') as FormControl;
   }

   get ProjDesc(){
     return this.proposalForm.get('ProjDesc') as FormControl;

   }

   get TeamMember(){
     return this.proposalForm.get('TeamMember') as FormControl;
   }

   get GroupMem1(){
    return this.proposalForm.get('GroupMem1') as FormControl;

   }
   get GroupMem2(){
    return this.proposalForm.get('GroupMem2') as FormControl;

   }
   get GroupMem3(){
    return this.proposalForm.get('GroupMem3') as FormControl;

   }
   get GroupMem4(){
    return this.proposalForm.get('GroupMem4') as FormControl;

   }

   get cmsId1(){
     return this.proposalForm.get('cmsId1') as FormControl
   }

   get cmsId2(){
    return this.proposalForm.get('cmsId2') as FormControl;
  }

   get cmsId3(){
     return this.proposalForm.get('cmsId3') as FormControl;
   }

   get cmsId4(){
     return this.proposalForm.get('cmsId4') as FormControl;

   }

   get SupName(){
     return this.proposalForm.get('SupName') as FormControl;
   }

   get CoSupname(){
     return this.proposalForm.get('CoSupname') as FormControl
   }



  onSubmit(): any {
    this.proposalService.AddProposal(this.proposalForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        // this.ngZone.run(() => this.router.navigateByUrl('/test-list'))
        this.proposalForm.reset();
        this.userSubmitted = false;
        this.alertifyService.success('Successfully Submit');
      }, (err) => {
        console.log(err);
    });
  }

//  onSubmit(){
//   console.log(this.proposalForm);
//   this.userSubmitted = true;

//   if(this.proposalForm.valid){
//   // this.user = Object.assign(this.user, this.registerationForm.value);
//   this.proposalService.addUser(this.userData());
//   this.proposalForm.reset();
//   this.userSubmitted = false;
//  this.alertifyService.success('Successfully Submit');
//   } else{
//     this.alertifyService.error('Process Failed');
//   }
// }




}
