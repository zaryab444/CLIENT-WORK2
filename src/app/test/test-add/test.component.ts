
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
// import { TestService } from './../test.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private testservice: TestService
  ) {
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })
  }

  ngOnInit() { }

  onSubmit(): any {
    this.testservice.AddBook(this.bookForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/test-list'))
      }, (err) => {
        console.log(err);
    });
  }

}

