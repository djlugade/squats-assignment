import { Injectable } from '@angular/core';
import { url } from '../../environments/environment';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserPostService {
  private url: string = url;
  constructor(private _http: Http ) { }

  /**
   * Add users post
   */
  addPost(form): Observable<any> {
    return this._http.post(`${this.url}/userPost/add-post`, form )
    .map( res => {
      return res.json();
    });
  }

   /**
   * get user post
   */
  getUserPost(emailId: String): Observable<any> {
    return this._http.get(`${this.url}/userPost/user-post`, {params: {'email': emailId }})
    .map( (res) => {
      return res.json();
    });
  }

}
