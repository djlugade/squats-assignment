import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

// form module
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

// Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { MaterialDesignModule } from './material-design/material-design.module';

// Routing Module
import { AppRoutingModule, appRoutingComponent } from './app-routing-module';

// custom Module 3rd party
import { FlashMessagesModule } from 'angular2-flash-messages';


// component
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AddPostFormDialogueComponent } from './component/user-logged-in/add-post/add-post-form-dialogue/add-post-form-dialogue.component';

// services
import { UserAuthService } from './service/user-auth.service';
import { UserDataService } from './service/user-data.service';
import { UserPostService } from './service/user-post.service';
import {UserAuthGuard} from './service/guards/user-auth.guard';

// pipe
import { SortGridByDatePipe } from './pipe/sort-grid-by-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddPostFormDialogueComponent,
    appRoutingComponent,
    SortGridByDatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    CustomFormsModule,
    MaterialDesignModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule
  ],
  entryComponents: [
    AddPostFormDialogueComponent
  ],
  providers: [UserAuthService, UserDataService, UserPostService, UserAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
