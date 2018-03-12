import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDataService } from '../../../service/user-data.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import {MatTableDataSource, MatSort, MatSortable} from '@angular/material';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  private allUserData;

   displayedColumns = ['fullname', 'username', 'email', 'phno'];
   dataSource;


   @ViewChild(MatSort) sort: MatSort;


  constructor(private _userData: UserDataService,
              private flashMsg: FlashMessagesService,
              private router: Router) { }

  ngOnInit() {
    // get Data from DB
    this._userData.userData().subscribe( data => {
       if (!data.success) {
        return;
      }
      this.allUserData = data.userdata;
      this.dataSource = new MatTableDataSource(this.allUserData);
      this.dataSource.sort = this.sort;
    });
  }

  // Filter Data
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // click on row navigate
  getRecord(row) {
    this.router.navigate(['/user-post'], { queryParams: { email: row.email } });
  }
}
