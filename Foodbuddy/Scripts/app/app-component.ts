import { Component, ViewChild, ElementRef } from '@angular/core';
import { Session } from './models/index';
import { AuthenticationService } from './auth/index';


@Component({
    selector: 'my-app',
    templateUrl: './templates/app-component.html'
})
export class AppComponent {
    
    constructor(public session: Session, private authenticationService: AuthenticationService) {
        session = this.authenticationService.getUserSession();
    }
}

@Component({
  selector: 'home',
  template: `<h1>THis is home page</h1>`
})
export class HomeComponent {}
