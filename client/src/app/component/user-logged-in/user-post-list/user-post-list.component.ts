import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/take';
import {UserPostService} from '../../../service/user-post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from '../../../service/user-auth.service';

@Component({
  selector: 'app-user-post-list',
  templateUrl: './user-post-list.component.html',
  styleUrls: ['./user-post-list.component.scss']
})
export class UserPostListComponent implements OnInit {
  curEmailId;
  order = '-date';
  curEmailIdStore;
  blogData = [];
  showMsg = true;
  constructor(private userPost: UserPostService,
              private flashMsg: FlashMessagesService,
              private route: ActivatedRoute,
              private uerAuth: UserAuthService,
              private router: Router) { }

  ngOnInit() {
    this.curEmailIdStore = this.uerAuth.emailId;
    this.route.queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.curEmailId = params['email'] || this.curEmailIdStore.email;
    });
    this.userPost.getUserPost(this.curEmailId).subscribe(data => {
      if (!data.success) {
        return this.flashMsg.show(data.msg, { timeout: 3000 });
      }
      this.blogData = data.userData;
      this.blogData.forEach(item => {
        if(item.blog){
          return this.showMsg = true;
        }
        return this.showMsg = false;
      });
      // this.router.navigate(['dashboard']);
    });
  }

}
