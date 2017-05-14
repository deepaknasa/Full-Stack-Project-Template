import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(email: string, password: string) {
        let body = JSON.stringify({ Email: email, Password: password });
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/Account/Login', body, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log('user response:', response.text());
                if (response && response.status === 200) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    
                    localStorage.setItem('currentUser', response.text());
                }
            });
    }

    logout() {
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        this.http.post('/Account/Logout', {}, options)
            .map((response: Response) => {
                console.log('user response:', response.text());
                if (response && response.status === 200) {
                    // remove user from local storage to log user out
                    localStorage.removeItem('currentUser');
                }
            })
            .catch((error: Response | any) => {
                console.log('error is logout', error);
                 let errMsg: string;
                  if (error instanceof Response) {
                    const body = error.json() || '';
                    const err = body.error || JSON.stringify(body);
                    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                  } else {
                    errMsg = error.message ? error.message : error.toString();
                  }
                  console.error(errMsg);
                return Observable.throw(errMsg);
            });
        
    }
}