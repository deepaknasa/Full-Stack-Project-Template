import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { LoginComponent } from './app/login/login.component';
import { LoginDialog } from './app/dialog/login-dialog'
import { RegisterDialog } from './app/dialog/register-dialog'


@NgModule({

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ],

    declarations: [LoginComponent, LoginDialog, RegisterDialog],
    entryComponents: [LoginDialog, RegisterDialog],
    bootstrap: [LoginComponent],
    providers: []
})
export class MyTemplateAppModule { }

platformBrowserDynamic().bootstrapModule(MyTemplateAppModule);