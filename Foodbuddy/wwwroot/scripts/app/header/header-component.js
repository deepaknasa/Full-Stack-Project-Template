"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    //constructor() { }
    function HeaderComponent(zone) {
        var _this = this;
        this.zone = zone;
        this.searchActivatedClass = 'search-activated';
        this.userAuthToken = null;
        this.googleLoginButtonId = "google-login-button";
        // Triggered after a user successfully logs in using the Google external
        // login provider.
        this.onGoogleLoginSuccess = function (loggedInUser) {
            _this.userAuthToken = loggedInUser.getAuthResponse().id_token;
            console.log('display name: ', loggedInUser.getBasicProfile().getName());
            console.log(_this);
        };
        this.zone.run(function () {
            $.proxy(_this.onGoogleLoginSuccess, _this);
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        //let scriptTag: HTMLScriptElement = <HTMLScriptElement>document.getElementById("google-signin");
        //var url = 'https://apis.google.com/js/platform.js';
        //if (scriptTag.src !== url) { /* Don't re-insert the script if it's already there */
        //    let newScript: HTMLScriptElement = <HTMLScriptElement>document.createElement('script');
        //    newScript.type = 'text/javascript';
        //    newScript.async = true;
        //    newScript.src = url;
        //    scriptTag.parentNode.insertBefore(newScript, scriptTag);
        //    window['onSignIn'] = this.onSignIn;
        //}
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        // Converts the Google login button stub to an actual button.
        gapi.signin2.render(this.googleLoginButtonId, {
            "onSuccess": this.onGoogleLoginSuccess,
            "scope": "profile",
            "theme": "dark"
        });
    };
    //onSignIn(googleUser: any) {
    //    console.log('inside header method');
    //    var profile = googleUser.getBasicProfile();
    //    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //    console.log('Name: ' + profile.getName());
    //    console.log('Image URL: ' + profile.getImageUrl());
    //    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    //}
    HeaderComponent.prototype.searchActivated = function (searchActivated) {
        //console.log('inside searchActivated. Param value is : ', searchActivated);
        this.header.nativeElement.classList.add(this.searchActivatedClass);
    };
    HeaderComponent.prototype.searchDeactivated = function (searchEvent) {
        //console.log('inside searchDeactivated. Param value is : ', searchEvent);
        this.header.nativeElement.classList.remove(this.searchActivatedClass);
    };
    return HeaderComponent;
}());
__decorate([
    core_1.ViewChild('headerElem'),
    __metadata("design:type", core_1.ElementRef)
], HeaderComponent.prototype, "header", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: './templates/header/header-template.html',
        styleUrls: ['styles/app/header/header-style.css']
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header-component.js.map