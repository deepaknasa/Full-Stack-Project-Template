import { Component } from '@angular/core';
import { Session } from './models/index';
import { AuthenticationService } from './authentication/index';


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
  template: `
    <h1>Fullstack project template</h1>
    <p>This template facilitate quicker project setup</p>
  `
})
export class Home {}
