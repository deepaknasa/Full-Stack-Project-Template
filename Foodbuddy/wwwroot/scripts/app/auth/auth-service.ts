import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RegisterModel, LoginModel, Session } from '../models/index';
import { StorageService } from '../shared/storage-service';

@Injectable()
export class AuthenticationService {
    _session: Session;
    sessionUpdate: EventEmitter<Session> = new EventEmitter();

    constructor(private http: Http,
        private session: Session,
        private storageService: StorageService) {
        this._session = session;
    }

    login(model: LoginModel, updatedSession: Session) {
        let body = JSON.stringify({ Email: model.email, Password: model.password, RememberMe: model.rememberMe });
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/Account/Login', body, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log('user response:', response.text());
                if (response && response.status === 200) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.setCurrentUser(updatedSession);
                    this.sessionUpdated();
                    console.log('emit:event:sessionUpdated', this._session);
                }
            });
    }

    sessionUpdated() {
        this.sessionUpdate.emit(this._session);
    }

    logout() {
        this.logoutUser();
        return Observable.of('');
        //try {
            //return this.http.post('/Account/Logout', JSON.stringify({}))
            //    .map((response: Response) => {
            //        console.log('user response:', response.text());
            //        if (response && response.status === 200) {
            //            // remove user from local storage to log user out
            //            this.logoutUser();
            //        }
                    
            //    })
            //    .catch((error: Response | any) => {
            //        console.log('error is logout', error);
            //        let errMsg: string;
            //        if (error instanceof Response) {
            //            const body = error.json() || '';
            //            const err = body.error || JSON.stringify(body);
            //            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            //        } else {
            //            errMsg = error.message ? error.message : error.toString();
            //        }
            //        console.error(errMsg);
            //        return Observable.throw(errMsg);
            //    });
        //} catch (e) {
        //    console.log(e);
        //}
    }

    logoutUser() {
        this.storageService.clearSession();
        this.clearSession();
        this.sessionUpdated();
    }

    isLoggedIn() {
        return !!this.storageService.getCurrentUser();
    }

    register(model: RegisterModel) {
        let body = JSON.stringify({ Email: model.email, Password: model.password, ConfirmPassword: model.confirmPassword });
        //TO-DO
        //let body = JSON.stringify({ model });
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/Account/Register', body, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log('user response:', response.text());
                if (response && response.status === 200) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes

                    let userSession: Session = new Session();
                    userSession.userName = response.text();
                    this.storageService.setCurrentUser(userSession);
                    this.sessionUpdated();
                }
            });
    }

    getUserSession(): Session {
        if (!this._session) {
            this._session = new Session();
            this._session.isLoggedIn = false;
        } else {
            this._session.isLoggedIn = this.isLoggedIn();
            if (this._session.isLoggedIn) {
                this._session = this.storageService.getCurrentUser();
            }
        }
        return this._session;
    }

    setCurrentUser(updatedSession: Session) {
        this.storageService.setCurrentUser(updatedSession);
        this._session = updatedSession;
        //this._session.isLoggedIn = true;
    }

    clearSession() {
        this.storageService.clearSession();
        this._session.userName = '';
        this._session.isLoggedIn = false;
    }
}