import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './templates/app-component.html'
})
export class AppComponent { }

@Component({
  selector: 'home',
  template: `
    <h1>Fullstack project template</h1>
    <p>This template facilitate quicker project setup</p>
  `
})
export class Home {}
