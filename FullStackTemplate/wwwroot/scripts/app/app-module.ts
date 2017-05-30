import { NgModule, ApplicationRef } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MdDialog, MdDialogRef } from '@angular/material';

//models
import { RegisterModel, LoginModel, Session } from './models/index';

//Authentication service
import { AuthenticationService, AuthComponent } from './auth/index';

//Main application component
import { AppComponent, Home } from './app-component';

//Login components
import { LoginComponent, LoginDialog, LogoutComponent } from './login/login-component';
import { RegisterComponent, RegisterDialog } from './login/register-component';

//Search box
import { SearchComponent } from './search/index';

//Application header
import { HeaderComponent } from './header/index';

//Application Routes
import { DEMO_APP_ROUTES } from './routes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(DEMO_APP_ROUTES),
        MaterialModule,
        BrowserAnimationsModule
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        AuthenticationService,
        RegisterModel,
        LoginModel,
        Session
    ],
    declarations: [
        AppComponent,
        Home,
        AuthComponent,
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
        LoginDialog,
        RegisterDialog,
        SearchComponent,
        HeaderComponent
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
