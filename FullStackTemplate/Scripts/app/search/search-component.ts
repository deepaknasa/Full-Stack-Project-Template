import {
    Component,
    Inject,
    EventEmitter,
    Output,
    HostListener,
    ElementRef,
    ViewChild,
    Renderer
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'search-box',
    templateUrl: './templates/search/search-template.html',
    styleUrls: ['styles/app/search/search-style.css']
})
export class SearchComponent {
    @Output('onSearchActive') searchActivated: EventEmitter<string> = new EventEmitter();
    @Output('onSearchDeactive') searchDeactivated: EventEmitter<string> = new EventEmitter();
    @ViewChild('searchBox') searchInput: ElementRef;
    @ViewChild('searchDiv') searchDiv: ElementRef;

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        let x = event.keyCode;
        if (x === 27) {
            console.log('searchInput: ', this.searchInput.nativeElement.value);
            //this.searchInput.nativeElement.onblur();
            this.outSearch();
        }
    }

    searchActivatedClass: string = 'search-activated';

    searchKeyword: string;
    constructor( private renderer: Renderer) { }

    onSearch() {
        this.searchDiv.nativeElement.classList.add(this.searchActivatedClass);
        this.searchActivated.emit('search-activated');
    }

    outSearch() {
        this.searchDiv.nativeElement.classList.remove(this.searchActivatedClass);
        this.renderer.invokeElementMethod(
            this.searchInput.nativeElement,
            'blur',
            []);
        this.searchDeactivated.emit('search-deactive');
    }
}