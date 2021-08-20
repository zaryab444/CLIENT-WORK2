import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  Submit(){
    this.router.navigate(['/ideas'])
  }

}
