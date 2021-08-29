import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {

  Books:any = [];

  constructor(private testservice: TestService) { }

  ngOnInit(): void {
    this.testservice.GetBooks().subscribe(res => {
      console.log(res)
      this.Books =res;
    });
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.testservice.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      })
    }
  }
}
