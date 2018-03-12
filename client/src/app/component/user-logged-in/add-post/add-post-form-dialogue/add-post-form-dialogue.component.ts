import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { UserPostService } from '../../../../service/user-post.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';
import { UserAuthService } from '../../../../service/user-auth.service';

@Component({
  selector: 'app-add-post-form-dialogue',
  templateUrl: './add-post-form-dialogue.component.html',
  styleUrls: ['./add-post-form-dialogue.component.css']
})
export class AddPostFormDialogueComponent implements OnInit {

  currentDate: Date = new Date();
  curEmailId;
  constructor(public thisDialogRef: MatDialogRef<AddPostFormDialogueComponent>,
              private uerAuth: UserAuthService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private userPost: UserPostService,
              private router: Router,
              private flashMsg: FlashMessagesService) {}

  ngOnInit() {
    this.curEmailId = this.uerAuth.emailId;

  }


   // add post
   userAddPost(f: NgForm) {
     const curEmail = this.curEmailId.email.toLowerCase();
    const userAddPost = {
    'email': curEmail,
    'title': f.value.title,
    'msg': f.value.msg,
    'date': this.currentDate
    };
    this.userPost.addPost(userAddPost).take(1).subscribe( data => {
      if (!data.success) {
        return this.flashMsg.show(data.msg, { timeout: 3000 });
      }
      this.thisDialogRef.close();
      this.flashMsg.show('Post added Successfully', { timeout: 3000 });
    });
  }


}
