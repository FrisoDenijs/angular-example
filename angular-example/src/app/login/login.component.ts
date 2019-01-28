import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginForm } from './login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: LoginForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new LoginForm();
  }

  login() {
    const loginData = this.loginForm.getModel();

    this.authService.login(this.loginForm.value.userName, this.loginForm.value.password);
  }
}
