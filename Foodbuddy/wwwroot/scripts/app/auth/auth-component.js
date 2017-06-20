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
var index_1 = require("./index");
var index_2 = require("../models/index");
var index_3 = require("../models/index");
var auth2;
var AuthComponent = (function () {
    function AuthComponent(authenticationService, model, cdRef) {
        this.authenticationService = authenticationService;
        this.model = model;
        this.cdRef = cdRef;
        this.googleUser = {};
        this.clientId = '141746026166-knp1e85dt0kmvp2db21u5afa0l3jk565.apps.googleusercontent.com';
        this._session = authenticationService.getUserSession();
        //this._session.isLoggedIn = false;
        //this._session.userName = 'deepak';
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.sessionUpdate.subscribe(function (session) {
            console.log('subscribe:event:sessionUpdated', session);
            _this._session = session;
            _this.cdRef.detectChanges();
            _this.loadGoogleSignIn();
        });
    };
    AuthComponent.prototype.ngAfterViewInit = function () {
        this.loadGoogleSignIn();
    };
    AuthComponent.prototype.loadGoogleSignIn = function () {
        var _this = this;
        gapi.load('auth2', function () {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            auth2 = gapi.auth2.init({
                client_id: _this.clientId,
                cookiepolicy: 'single_host_origin',
            });
            _this.attachSignin(document.getElementById('google-login-button'));
        });
    };
    AuthComponent.prototype.attachSignin = function (element) {
        var _this = this;
        if (element) {
            console.log(element.id);
            auth2.attachClickHandler(element, {}, function (googleUser) {
                var basicProfile;
                basicProfile = googleUser.getBasicProfile();
                var tempSession = new index_2.Session();
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
                _this.model.password = googleUser.getBasicProfile().getName();
                _this.model.email = googleUser.getBasicProfile().getEmail();
                _this.authenticationService.login(_this.model, tempSession).subscribe(function (data) {
                    //this.router.navigate([this.returnUrl]);
                    console.log('data', data);
                }, function (error) {
                    console.log('login failed');
                });
            }, function (error) {
                alert(JSON.stringify(error, undefined, 2));
            });
        }
    };
    AuthComponent.prototype.signOut = function () {
        var _this = this;
        auth2.signOut().then(function () {
            _this.authenticationService.logout()
                .subscribe(function (data) {
                console.log('user is signed out');
            }, function (error) {
                console.log('there is error');
            });
        });
    };
    return AuthComponent;
}());
__decorate([
    core_1.ViewChild('googleLoginBtn'),
    __metadata("design:type", core_1.ElementRef)
], AuthComponent.prototype, "gLogin", void 0);
AuthComponent = __decorate([
    core_1.Component({
        selector: 'auth-component',
        templateUrl: './templates/auth/auth-component.html',
        styleUrls: ['styles/app/auth/auth-style.css']
    }),
    __metadata("design:paramtypes", [index_1.AuthenticationService, index_3.LoginModel, core_1.ChangeDetectorRef])
], AuthComponent);
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth-component.js.map