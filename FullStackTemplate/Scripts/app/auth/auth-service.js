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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var index_1 = require("../models/index");
var AuthenticationService = (function () {
    function AuthenticationService(http, session) {
        this.http = http;
        this.session = session;
        this._currentUserKey = "currentUser";
        this.sessionUpdate = new core_1.EventEmitter();
        this._session = session;
    }
    AuthenticationService.prototype.login = function (model) {
        var _this = this;
        var body = JSON.stringify({ Email: model.email, Password: model.password, RememberMe: model.rememberMe });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/Account/Login', body, options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            console.log('user response:', response.text());
            if (response && response.status === 200) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.setCurrentUser(response.text());
                _this.sessionUpdated();
                console.log('emit:event:sessionUpdated', _this._session);
            }
        });
    };
    AuthenticationService.prototype.sessionUpdated = function () {
        this.sessionUpdate.emit(this._session);
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        try {
            return this.http.post('/Account/Logout', JSON.stringify({}))
                .map(function (response) {
                console.log('user response:', response.text());
                if (response && response.status === 200) {
                    // remove user from local storage to log user out
                    _this.clearSession();
                    _this.sessionUpdated();
                }
            })
                .catch(function (error) {
                console.log('error is logout', error);
                var errMsg;
                if (error instanceof http_1.Response) {
                    var body = error.json() || '';
                    var err = body.error || JSON.stringify(body);
                    errMsg = error.status + " - " + (error.statusText || '') + " " + err;
                }
                else {
                    errMsg = error.message ? error.message : error.toString();
                }
                console.error(errMsg);
                return Observable_1.Observable.throw(errMsg);
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        return localStorage.getItem(this._currentUserKey);
    };
    AuthenticationService.prototype.setCurrentUser = function (user) {
        localStorage.setItem(this._currentUserKey, user);
        this._session.userName = user;
        this._session.isLoggedIn = true;
    };
    AuthenticationService.prototype.clearSession = function () {
        localStorage.removeItem(this._currentUserKey);
        this._session.userName = '';
        this._session.isLoggedIn = false;
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return !!this.getCurrentUser();
    };
    AuthenticationService.prototype.register = function (model) {
        var _this = this;
        var body = JSON.stringify({ Email: model.email, Password: model.password, ConfirmPassword: model.confirmPassword });
        //TO-DO
        //let body = JSON.stringify({ model });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/Account/Register', body, options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            console.log('user response:', response.text());
            if (response && response.status === 200) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.setCurrentUser(response.text());
                _this.sessionUpdated();
            }
        });
    };
    AuthenticationService.prototype.getUserSession = function () {
        this._session.isLoggedIn = this.isLoggedIn();
        this._session.userName = this.getCurrentUser();
        return this._session;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, index_1.Session])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=auth-service.js.map