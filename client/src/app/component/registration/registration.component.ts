import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/take';
import { UserAuthService } from '../../service/user-auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private auth: UserAuthService,
              private router: Router,
              private flashMsg: FlashMessagesService) { }

  ngOnInit() {
  }

  /**
   * Register User
   */
  registerUser(f: NgForm) {
    const userRegisterValue = {
      'fullname': f.value.fullname,
      'username': f.value.username,
      'email': f.value.email.toLowerCase(),
      'password': f.value.password,
      'phno': f.value.phno
    };

    this.auth.register(userRegisterValue).take(1).subscribe( data => {
      if (!data.success) {
          return this.flashMsg.show(data.msg, { timeout: 3000 });
      }
      this.flashMsg.show('Data Saved Successfully', { timeout: 3000 });
      this.router.navigate(['/login']);
    });
  }

}
