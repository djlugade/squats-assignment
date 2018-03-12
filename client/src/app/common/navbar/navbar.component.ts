import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserAuthService } from '../../service/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
              public auth: UserAuthService,
              private flashMsg: FlashMessagesService,
              private router: Router
  ) { }

  ngOnInit() {
    
  }

  logout() {
    this.auth.logOut();
    this.flashMsg.show('Successfully Logout...', { timeout: 3000 });
    this.router.navigate(['/login']);
  }

}
