import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { DasboardComponent } from './component/user-logged-in/dasboard/dasboard.component';
import { AddPostComponent } from './component/user-logged-in/add-post/add-post.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { UserPostListComponent } from './component/user-logged-in/user-post-list/user-post-list.component';
import { UserAuthGuard } from './service/guards/user-auth.guard';


const appRoutes: Routes = [
    { path: 'register', component: RegistrationComponent},
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DasboardComponent, canActivate: [UserAuthGuard]},
    { path: 'user-post', component: UserPostListComponent, canActivate: [UserAuthGuard]},
    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

export const appRoutingComponent  = [
                                        PageNotFoundComponent,
                                        DasboardComponent,
                                        AddPostComponent,
                                        RegistrationComponent,
                                        LoginComponent,
                                        UserPostListComponent
                                  ];
