import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() username?: string;
  @Input() password?: string;

  constructor(public loginService: LoginService) { }
  
  ngOnInit(): void {
  }

  


}
