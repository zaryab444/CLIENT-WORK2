import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IdeasService } from '../ideas.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  getId: any;
  customerId: string = '';
  customerDetails : any;


  constructor(private router: Router, private activatedRoute: ActivatedRoute,private ideaservice: IdeasService) { }


  ngOnInit(): void {


    this.activatedRoute.params.subscribe(data =>{
          this.customerId = data.id;
    });

    this.ideaservice.GetIdea(this.customerId).subscribe(data=>{
      this.customerDetails = data['results'];
      console.log(this.customerDetails);
    });



  }







  // ngOnInit(): void {
  //   this.getId = this.activatedRoute.snapshot.paramMap.get('id');

  // }

}
