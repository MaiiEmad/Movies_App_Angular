import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.pattern(/^[A-Z]/),
      Validators.required,
    ]),
  });

  errorMessage!:string;
  flag:boolean=false;
  // when user enter submit or register .. this method will be called
  getLoginInfo(loginForm: any) {
    if (loginForm.valid == true) {
      this._AuthService.login(loginForm.value).subscribe((data) => {
      console.log(data);
      console.log(data.message);
        if (data.message == 'success') {
          this._Router.navigate(['/home']);
        } else {
            this.flag=true;
            this.errorMessage=data.message;

        }
      });
    }
  }

  // Called Angular constructor and execute after constructor
  // And wait for directives in html to execute it "till load then Call"
  ngOnInit() {}
}
