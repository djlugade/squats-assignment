import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from '../../service/user-auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: UserAuthService,
              private flashMsg: FlashMessagesService,
              private _router: Router) { }

  ngOnInit() {
  }

  userlogin(f: NgForm) {
    const loginDetail = {'email': f.value.email, 'password': f.value.password};
    this.auth.loginUser(loginDetail).take(1).subscribe(data => {
      if(!data.success) {
        return this.flashMsg.show(data.msg, { timeout: 3000 });
      }
      this.auth.storeUserToken(data.token, data.user);
      this.flashMsg.show('Successfully Login', { timeout: 3000 }); 
      this._router.navigate(['dashboard']);
    });
  }

}
