import { User } from './user';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>({})

  constructor(private TokenService: TokenService) {
    if (this.TokenService.checkToken()) {
      this.decodeJWT()
    }
  }

  private decodeJWT() {
    const token = this.TokenService.returnToken()
    const user = jwt_decode(token) as User
    this.userSubject.next(user)
  }

  returnUser() {
    return this.userSubject.asObservable()
  }

  saveToken(token: string) {
    this.TokenService.saveToken(token)
    this.decodeJWT()
  }

  logout() {
    this.TokenService.deleteToken()
    this.userSubject.next({})
  }

  checkLogged() {
    return this.TokenService.checkToken()
  }
}
