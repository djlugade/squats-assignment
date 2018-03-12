import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule,
        MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: []
})
export class MaterialDesignModule { }


