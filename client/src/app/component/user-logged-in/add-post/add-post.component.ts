import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

// Dailogue box xomponent
import { AddPostFormDialogueComponent } from './add-post-form-dialogue/add-post-form-dialogue.component';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(AddPostFormDialogueComponent, {
       width: '400px'
    });
  }

}
