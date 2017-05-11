"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NgModule } from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MaterialModule } from '@angular/material';
//import { LoginComponent } from './app/login/login.component';
//import { LoginDialog } from './app/dialog/login-dialog'
//import { RegisterDialog } from './app/dialog/register-dialog'
//Main application module
var app_module_1 = require("./app/app.module");
//@NgModule({
//    imports: [
//        BrowserModule,
//        BrowserAnimationsModule,
//        FormsModule,
//        ReactiveFormsModule,
//        MaterialModule,
//    ],
//    declarations: [/*LoginComponent,*/ LoginDialog, RegisterDialog],
//    entryComponents: [LoginDialog, RegisterDialog],
//    bootstrap: [/*LoginComponent*/],
//    providers: []
//})
//export class MyTemplateAppModule { }
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map