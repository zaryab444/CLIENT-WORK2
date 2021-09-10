import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Weekly } from './Weekly';
@Injectable({
  providedIn: 'root'
})
export class WeeklyRequestService {

  // Node/Express API
REST_API: string = 'http://localhost:8000/api';

// Http Header
httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

constructor(private httpClient: HttpClient) { }


// Add
AddWeekly(data: Weekly): Observable<any> {
  let API_URL = `${this.REST_API}/add-week`;
  return this.httpClient.post(API_URL, data)
    .pipe(
      catchError(this.handleError)
    )
}



// Error
handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Handle client error
    errorMessage = error.error.message;
  } else {
    // Handle server error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}
