import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
//import { Session } from './models/index';
//import { AuthenticationService } from './auth/index';


@Component({
    selector: 'search-box',
    templateUrl: './templates/search/search-template.html'
})
export class SearchComponent {
    @Output('onSearchActive') searchActivated: EventEmitter<string> = new EventEmitter();
    @Output('onSearchDeactive') searchDeactivated: EventEmitter<string> = new EventEmitter();

    searchKeyword: string;
    constructor( @Inject(DOCUMENT) private doc: any) { }

    onSearch() {
        this.searchActivated.emit('search-activated');
    }

    outSearch() {
        this.searchDeactivated.emit('search-deactive');
    }
}