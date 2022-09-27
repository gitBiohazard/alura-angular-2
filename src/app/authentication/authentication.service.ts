import { UserService } from './user/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private req: HttpClient, private UserService: UserService) { }

  authenticate(user: string, pass: string): Observable<HttpResponse<any>> {
    return this.req.post('http://localhost:3000/user/login', {
      userName: user,
      password: pass
    }, {
      observe: 'response'
    }).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? ''
        this.UserService.saveToken(authToken)
      })
    )
  }
}
