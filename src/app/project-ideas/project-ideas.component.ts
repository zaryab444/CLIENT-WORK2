import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-ideas',
  templateUrl: './project-ideas.component.html',
  styleUrls: ['./project-ideas.component.scss']
})
export class ProjectIdeasComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  viewCustomer() {

    this.router.navigate(['/detail/:id'])


  }

}
