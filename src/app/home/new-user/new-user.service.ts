import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private HttpClient: HttpClient) { }

  createNewUser(newUser: NewUser){
    return this.HttpClient.post('http://localhost:3000/user/signup', newUser)
  }

  verifyExistingUser(userName: string) {
    return this.HttpClient.get(`http://localhost:3000/user/exists/${userName}`)
  }
}
