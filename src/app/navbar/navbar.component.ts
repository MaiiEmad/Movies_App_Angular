import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;

  constructor(private _AuthService: AuthService) {
    // not null..ملانة داتا
    // if(_AuthService.currentUsers != null){
    //      this.isLogin=true;
    // }
    // else
    // {
    //   this.isLogin=false;
    // }

    _AuthService.currentUsers.subscribe((data) => {
      if (data != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;

      }
    });
  }

  logOut(){
    this._AuthService.logOut();
  }

  ngOnInit() {}
}
