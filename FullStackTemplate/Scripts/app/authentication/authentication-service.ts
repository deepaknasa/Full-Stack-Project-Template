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
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}