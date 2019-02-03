import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { credentialResponse } from '../model/credentialResponse';
import { AccountService } from '../shared/account.service';
import { TokenService } from 'src/app/shared/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  identifiantControl: AbstractControl;
  passwordControl: AbstractControl;
  wordingAlert: string;
  isError = false;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private tokenService: TokenService,
    private router: Router
  ) { 
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
    this.identifiantControl = this.loginForm.controls['username'];
    this.passwordControl = this.loginForm.controls['password'];
  }

  ngOnInit() {
  }

  onSubmit(form: credentialResponse) {
    this.isError = false;
    this.accountService.login(form).subscribe(
      loginResponse => {
        this.tokenService.setToken(loginResponse);
        this.router.navigate(['manage-articles']);
      },
      errorLoginResponse => {
        this.isError = true;
        if (errorLoginResponse.error.code === 'LOGIN_FAILED') {
          this.wordingAlert = 'Votre mot de passe ou username est invalide';
        } else {
          this.wordingAlert = 'Erreur de connexion';
        }
      }
    )
  }

}
