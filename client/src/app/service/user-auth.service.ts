import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import {tokenNotExpired} from 'angular2-jwt';
import { url } from '../../environments/environment';
import 'rxjs/add/operator/map';
import {IRegister, Ilogin } from '../models/register.model'


@Injectable()
export class UserAuthService {
  private url: String = url;
  authToken: string;
  user;

  readonly emailId = JSON.parse(localStorage.getItem('user')) || '';
  
  constructor(private _http: Http) { }
  
  /**
   * store token and user email 
   */
  storeUserToken(token, user){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  /**
   * register
   */
  register(form): Observable<IRegister> {
    return this._http.post(`${this.url}/auth/user-register`, form )
    .map( res => {
      return res.json();
    });
  }

   /**
   * login with email 
   */
  loginUser(form): Observable<Ilogin> {
    return this._http.post(`${this.url}/auth/login`, form)
    .map(res => {
      console.log(res.json());
      return res.json();
    });
  }
  
  getToken():string{
    const curToken = localStorage.getItem('token');
    return curToken;
   }

  /**
   * check if user logged in return boolean
   */
  loggedIn():boolean {
    return tokenNotExpired();
  }


  logOut(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
