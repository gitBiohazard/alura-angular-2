import { UserService } from './../../authentication/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user$ = this.UserService.returnUser()
  constructor(private UserService: UserService, private router: Router) { }

  logout() {
    this.UserService.logout()
    this.router.navigate([''])
  }

  ngOnInit(): void {
  }

}
