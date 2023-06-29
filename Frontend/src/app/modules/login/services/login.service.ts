import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginResponse } from '../login.model';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/auth/login'
  constructor(private http: HttpClient, private router: Router) { }

  login(userObj: any): Observable<any>{
    return this.http.post<LoginResponse>(this.url, userObj).pipe(
      tap((res) => {
        localStorage.setItem('access_token', res.access_token);
      }),
      // If there is an error, redirect to register page
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404) {
            this.router.navigate(['/register']);

        }
        return throwError(err);
      })
    )
  }
}
