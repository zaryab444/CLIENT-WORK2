import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {

// Node/Express API
REST_API: string = 'http://localhost:8000/api';

// Http Header
httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

constructor(private httpClient: HttpClient) { }
 // Get all objects
 GetIdeas() {
  return this.httpClient.get(`${this.REST_API}/ideas`);
}


// Get single object
GetIdea(id:any): Observable<any> {
  let API_URL = `${this.REST_API}/read-ideas/${id}`;
  return this.httpClient.get(API_URL, { headers: this.httpHeaders })
    .pipe(map((res: any) => {
        return res || {}
      }),
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
