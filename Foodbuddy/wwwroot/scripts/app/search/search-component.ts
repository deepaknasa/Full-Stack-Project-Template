import {
    Component,
    Inject,
    EventEmitter,
    Output,
    HostListener,
    ElementRef,
    ViewChild,
    Renderer,
    OnInit
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { FoodStat } from '../models/index';
import { StatsService } from '../stats/index';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'search-box',
    templateUrl: './templates/search/search-template.html',
    styleUrls: ['styles/app/search/search-style.css']
})
export class SearchComponent implements OnInit {
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
    items: Observable<FoodStat[]>;

    private searchKeyword = new Subject<string>();
    constructor(private renderer: Renderer,
                private statsService: StatsService) { }

    ngOnInit(): void {
        this.searchKeyword
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(key => {
                return this.statsService.searchStats(key);
            })
            .catch((error) => {
                console.log(error);
                return Observable.of<FoodStat[]>([]);
            })
            .subscribe();
        
    }

    searchItems(keyword: string): void {
        this.searchKeyword.next(keyword);
    }

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