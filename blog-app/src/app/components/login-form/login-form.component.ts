import { templateJitUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';

//COMPONENTE DE LOGUEO

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() username: string = "";
  @Input() password: string = "";

  constructor(public loginService: LoginService) { }
  
  ngOnInit(): void {
 
  }

  authenticate(): void { //si se encuentra usuario con esas credenciales se llena la variable, si no salta un alert
    this.loginService.authenticate(this.username, this.password).subscribe(response => {
      let usersArray: any = response;
      if (usersArray[0]) {
        this.setUser(usersArray[0]);
      } else {
        alert('wrong credentials')
      }
    })
  }

  setUser(user: User): void {
    this.loginService.setUser(user);
  }



}
