import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './index';
import { Session } from '../models/index';

@Component({
    selector: 'auth-component',
    templateUrl: './templates/auth/auth-component.html'
})
export class AuthComponent implements OnInit {
    _session: Session;
    constructor(public auth: AuthenticationService) {
        this._session = auth.getUserSession();
    }

    ngOnInit() {
        this.auth.sessionUpdate.subscribe(
            (session: Session) => {
                console.log('subscribe:event:sessionUpdated', session);
                this._session = session;
            }
        );
    }
}