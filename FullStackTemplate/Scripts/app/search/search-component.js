"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var index_1 = require("../stats/index");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/map");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var SearchComponent = (function () {
    function SearchComponent(renderer, statsService) {
        this.renderer = renderer;
        this.statsService = statsService;
        this.searchActivated = new core_1.EventEmitter();
        this.searchDeactivated = new core_1.EventEmitter();
        this.searchActivatedClass = 'search-activated';
        this.searchKeyword = new Subject_1.Subject();
    }
    SearchComponent.prototype.handleKeyboardEvent = function (event) {
        var x = event.keyCode;
        if (x === 27) {
            this.outSearch();
        }
    };
    SearchComponent.prototype.alternateSearchActivation = function (event) {
        this.onSearch();
        this.renderer.invokeElementMethod(this.searchInput.nativeElement, 'focus', []);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchKeyword
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (key) {
            return _this.statsService.searchStats(key);
        })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        })
            .subscribe();
    };
    SearchComponent.prototype.searchItems = function (keyword) {
        this.searchKeyword.next(keyword);
    };
    SearchComponent.prototype.onSearch = function () {
        this.searchDiv.nativeElement.classList.add(this.searchActivatedClass);
        this.searchActivated.emit('search-activated');
    };
    SearchComponent.prototype.outSearch = function () {
        this.searchInput.nativeElement.value = '';
        this.statsService.resetStats();
        this.searchDiv.nativeElement.classList.remove(this.searchActivatedClass);
        this.renderer.invokeElementMethod(this.searchInput.nativeElement, 'blur', []);
        this.searchDeactivated.emit('search-deactive');
    };
    return SearchComponent;
}());
__decorate([
    core_1.Output('onSearchActive'),
    __metadata("design:type", core_1.EventEmitter)
], SearchComponent.prototype, "searchActivated", void 0);
__decorate([
    core_1.Output('onSearchDeactive'),
    __metadata("design:type", core_1.EventEmitter)
], SearchComponent.prototype, "searchDeactivated", void 0);
__decorate([
    core_1.ViewChild('searchBox'),
    __metadata("design:type", core_1.ElementRef)
], SearchComponent.prototype, "searchInput", void 0);
__decorate([
    core_1.ViewChild('searchDiv'),
    __metadata("design:type", core_1.ElementRef)
], SearchComponent.prototype, "searchDiv", void 0);
__decorate([
    core_1.HostListener('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], SearchComponent.prototype, "handleKeyboardEvent", null);
__decorate([
    core_1.HostListener('document:keydown.alt.x', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], SearchComponent.prototype, "alternateSearchActivation", null);
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search-box',
        templateUrl: './templates/search/search-template.html',
        styleUrls: ['styles/app/search/search-style.css']
    }),
    __metadata("design:paramtypes", [core_1.Renderer,
        index_1.StatsService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search-component.js.map