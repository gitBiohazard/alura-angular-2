import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = ''
  pass = ''

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void { }

  login() {
    this.authService.authenticate(this.user, this.pass).subscribe(() => {
      console.log('Autenticado com sucesso')
      this.router.navigateByUrl('/animals')
    }, (error) => {
      alert('Usuário ou senha inválido')
      console.log(error)
    })
  }

}
