import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginResponse } from '../model/loginResponse';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { credentialResponse } from '../model/credentialResponse';
import { UtilsService } from 'src/app/shared/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private utilsService: UtilsService) { }

  login(form: credentialResponse): Observable<loginResponse> {
    let url = '/api/Accounts/login';
    return this.http.post<loginResponse>(url, form).pipe(
      catchError(this.utilsService.handleError)
    );
  }

  logout(): Observable<any> {
    let url = '/api/Accounts/logout';
    return this.http.post<loginResponse>(url, '').pipe(
      catchError(this.utilsService.handleError)
    );
  }
}
