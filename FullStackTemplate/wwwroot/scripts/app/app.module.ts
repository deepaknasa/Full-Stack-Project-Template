import { NgModule, ApplicationRef } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MdDialog, MdDialogRef } from '@angular/material';

//Main application component
import { AppComponent, Home } from './app.component';
//Login components
import { LoginComponent, LoginDialog, RegisterDialog } from './login/login.component';

//Application Routes
import {DEMO_APP_ROUTES} from './routes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(DEMO_APP_ROUTES),
        MaterialModule,
        BrowserAnimationsModule
    ],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }],
    declarations: [
        AppComponent,
        Home,
        LoginComponent,
        LoginDialog,
        RegisterDialog
    ],
    entryComponents: [AppComponent, LoginDialog, RegisterDialog],
    bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(AppComponent);
  }
}
