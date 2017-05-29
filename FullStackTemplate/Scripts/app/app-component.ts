import { Component, ViewChild, ElementRef } from '@angular/core';
import { Session } from './models/index';
import { AuthenticationService } from './auth/index';


@Component({
    selector: 'my-app',
    templateUrl: './templates/app-component.html'
})
export class AppComponent {
    @ViewChild('headerElem') header: ElementRef;
    searchActivatedClass: string = 'search-activated';

    constructor(public session: Session, private authenticationService: AuthenticationService) {
        session = this.authenticationService.getUserSession();
    }

    searchActivated(searchActivated: string) {
        console.log('inside searchActivated. Param value is : ', searchActivated);
        this.header.nativeElement.classList.add(this.searchActivatedClass);
    }

    searchDeactivated(searchActivated: string) {
        console.log('inside searchDeactivated. Param value is : ', searchActivated);
        this.header.nativeElement.classList.remove(this.searchActivatedClass);
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
