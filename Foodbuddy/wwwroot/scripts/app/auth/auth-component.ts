import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService } from './index';
import { Session } from '../models/index';
import { LoginModel } from '../models/index';

declare const gapi: any;
var auth2: any;

@Component({
    selector: 'auth-component',
    templateUrl: './templates/auth/auth-component.html',
    styleUrls: ['styles/app/auth/auth-style.css']
})
export class AuthComponent implements OnInit, AfterViewInit {
    _session: Session;
    googleUser: {} = {};
    clientId: string = '141746026166-knp1e85dt0kmvp2db21u5afa0l3jk565.apps.googleusercontent.com';

    @ViewChild('googleLoginBtn') gLogin: ElementRef;


    constructor(private authenticationService: AuthenticationService, private model: LoginModel, private cdRef: ChangeDetectorRef) {
        this._session = authenticationService.getUserSession();
        //this._session.isLoggedIn = false;
        //this._session.userName = 'deepak';
    }

    ngOnInit() {
        this.authenticationService.sessionUpdate.subscribe(
            (session: Session) => {
                console.log('subscribe:event:sessionUpdated', session);
                this._session = session;
                this.cdRef.detectChanges();
                this.loadGoogleSignIn();
            }
        );
    }

    ngAfterViewInit() {
        this.loadGoogleSignIn();
    }

    loadGoogleSignIn() {
        gapi.load('auth2', () => {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            auth2 = gapi.auth2.init({
                client_id: this.clientId,
                cookiepolicy: 'single_host_origin',
                // Request scopes in addition to 'profile' and 'email'
                //scope: 'additional_scope'
            });
            this.attachSignin(document.getElementById('google-login-button'));
        });
    }

    attachSignin(element: HTMLElement) {
        if (element) {
            console.log(element.id);
            auth2.attachClickHandler(element, {},
                (googleUser: any) => {
                    let basicProfile: any;
                    basicProfile = googleUser.getBasicProfile();
                    let tempSession: Session = new Session();
                    if (basicProfile) {
                        tempSession.displayName = basicProfile.getName();
                        tempSession.userId = basicProfile.getId();
                        tempSession.userName = basicProfile.getName();
                        tempSession.givenName = basicProfile.getGivenName();
                        tempSession.familyName = basicProfile.getFamilyName();
                        tempSession.imageUrl = basicProfile.getImageUrl();
                        tempSession.email = basicProfile.getEmail();
                        tempSession.isLoggedIn = true;
                    }

                    this.model.password = googleUser.getBasicProfile().getName();
                    this.model.email = googleUser.getBasicProfile().getEmail();
                    this.authenticationService.login(this.model, tempSession).subscribe(
                        data => {
                            //this.router.navigate([this.returnUrl]);
                            console.log('data', data);
                        },
                        error => {
                            console.log('login failed');
                        });
                },
                (error: any) => {
                    alert(JSON.stringify(error, undefined, 2));
                });
        }
    }

    signOut() {
        auth2.signOut().then(() => {
            this.authenticationService.logout()
                .subscribe(
                data => {
                    console.log('user is signed out');
                },
                error => {
                    console.log('there is error');
                });
        });
    }
}