import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdeasService } from './ideas.service';

@Component({
  selector: 'app-project-ideas',
  templateUrl: './project-ideas.component.html',
  styleUrls: ['./project-ideas.component.scss']
})
export class ProjectIdeasComponent implements OnInit {
  Ideas:any = [];

  constructor(private router : Router , private ideaservice: IdeasService) { }

  ngOnInit(): void {
    this.ideaservice.GetIdeas().subscribe(res => {
      console.log(res)
      this. Ideas=res;
    });
  }



}
