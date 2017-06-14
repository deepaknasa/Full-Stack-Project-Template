import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

declare const gapi: any;
//declare var $: any;

@Component({
    selector: 'app-header',
    templateUrl: './templates/header/header-template.html',
    styleUrls: ['styles/app/header/header-style.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
    @ViewChild('headerElem') header: ElementRef;
    searchActivatedClass: string = 'search-activated';

    //userAuthToken: any = null;
    //googleLoginButtonId: string = "google-login-button";

    private _window: Window;

    constructor() { }
    //constructor(private zone: NgZone) {
    //    this.zone.run(() => {
    //        $.proxy(this.onGoogleLoginSuccess, this);
    //    });
    //}

    
    
    ngOnInit() {
        let scriptTag: HTMLScriptElement = <HTMLScriptElement>document.getElementById("google-signin");
        var url = 'https://apis.google.com/js/platform.js';
        if (scriptTag.src !== url) { /* Don't re-insert the script if it's already there */
            let newScript: HTMLScriptElement = <HTMLScriptElement>document.createElement('script');
            newScript.type = 'text/javascript';
            newScript.async = true;
            newScript.src = url;
            scriptTag.parentNode.insertBefore(newScript, scriptTag);
            //window['onSignIn'] = this.onSignIn;
        }

        //gapi.signin2.render(
        //this.googleLoginButtonId,
        //{
        //    "onSuccess": this.onSignIn,
        //    "scope": "profile",
        //    "theme": "dark"

        //});

    }

    //ngAfterViewInit() {
    //    // Converts the Google login button stub to an actual button.
    //    gapi.signin2.render(
    //        this.googleLoginButtonId,
    //        {
    //            "onSuccess": this.onGoogleLoginSuccess,
    //            "scope": "profile",
    //            "theme": "dark"
                
    //        });
    //}


    // Triggered after a user successfully logs in using the Google external
    // login provider.
    //onGoogleLoginSuccess = (loggedInUser: any) => {
    //    this.userAuthToken = loggedInUser.getAuthResponse().id_token;
    //    console.log('display name: ', loggedInUser.getBasicProfile().getName());
    //    console.log(this);
    //}

    onSignIn(googleUser: any) {
        console.log('inside header method');
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    searchActivated(searchActivated: string) {
        //console.log('inside searchActivated. Param value is : ', searchActivated);
        this.header.nativeElement.classList.add(this.searchActivatedClass);
    }

    searchDeactivated(searchEvent: string) {
        //console.log('inside searchDeactivated. Param value is : ', searchEvent);
        this.header.nativeElement.classList.remove(this.searchActivatedClass);
    }
}