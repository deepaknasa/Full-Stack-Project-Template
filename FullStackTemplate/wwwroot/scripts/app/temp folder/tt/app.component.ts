import { Component } from '@angular/core';

@Component({
  selector: 'template-app',
  template: `<div>
                <ng-content select="[dynamic-content]"></ng-content>
            </div>`,
})
export class AppComponent  { name = 'Angular'; }
