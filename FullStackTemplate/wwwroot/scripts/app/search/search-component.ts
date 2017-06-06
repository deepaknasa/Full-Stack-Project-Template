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
import { StatItem } from '../models/index';
import { StatsService } from '../stats/index';

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
            this.outSearch();
        }
        console.log('search input ', this.searchInput.nativeElement.value);
        this.statsService.searchStats(this.searchInput.nativeElement.value);
        if (x === 13) {
            //Search entered
            console.log('search entered. Key word is : ', this.searchInput.nativeElement.value);
            //this.statsService.searchStats(this.searchInput.nativeElement.value);
            //this.statsService.statsUpdated.emit('statsUpdated');
        }
    }

    @HostListener('document:keydown.alt.x', ['$event'])
    alternateSearchActivation(event: KeyboardEvent) {
        this.onSearch();
        this.renderer.invokeElementMethod(
            this.searchInput.nativeElement,
            'focus',
            []);
    }

    searchActivatedClass: string = 'search-activated';

    searchKeyword: string;
    constructor(private renderer: Renderer,
                private statsService: StatsService) { }

    onSearch() {
        this.searchDiv.nativeElement.classList.add(this.searchActivatedClass);
        this.searchActivated.emit('search-activated');
    }

    outSearch() {
        this.searchInput.nativeElement.value = '';
        this.statsService.resetStats();
        this.searchDiv.nativeElement.classList.remove(this.searchActivatedClass);
        this.renderer.invokeElementMethod(
            this.searchInput.nativeElement,
            'blur',
            []);
        this.searchDeactivated.emit('search-deactive');
    }
}