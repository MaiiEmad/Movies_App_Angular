import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService ,private _Router:Router) { }

  flag:boolean =false;



  // Here i build my form using TypeScript
  registerForm:FormGroup = new FormGroup({
    'first_name':new FormControl(null,[Validators.required ,Validators.minLength(3),Validators.maxLength(8)]),
    'last_name':new FormControl(null,[Validators.required ,Validators.minLength(3),Validators.maxLength(8)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.pattern(/^[A-Z]/),Validators.required])
  });

// when user enter submit or register .. this method will be called
  getRegisterInfo(registerForm: any){

    if(registerForm.valid == true){
    // console.log(registerForm.value);
    this._AuthService.register(registerForm.value).subscribe((data)=>
    {
      if(data.message == 'success'){
            this._Router.navigate(['/login'])
      }
      else{
        this.flag=true;

      }
      // console.log(data);
    })
    }
  }



  ngOnInit() {

    // console.log(this.registerForm);
  }

}
