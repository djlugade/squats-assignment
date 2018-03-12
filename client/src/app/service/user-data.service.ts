import { Injectable } from '@angular/core';
import { url } from '../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserDataService {
  private url: string = url;
  constructor(private _http: Http) { }

  /**
   * User Data
   */
  userData(): Observable<any> {
    return this._http.get(`${this.url}/userlist/userData`)
    .map( (res) => {
      return res.json();
    });
  }

}
