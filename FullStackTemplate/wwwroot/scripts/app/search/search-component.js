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
var SearchComponent = (function () {
    function SearchComponent(renderer) {
        this.renderer = renderer;
        this.searchActivated = new core_1.EventEmitter();
        this.searchDeactivated = new core_1.EventEmitter();
        this.searchActivatedClass = 'search-activated';
    }
    SearchComponent.prototype.handleKeyboardEvent = function (event) {
        var x = event.keyCode;
        if (x === 27) {
            console.log('searchInput: ', this.searchInput.nativeElement.value);
            //this.searchInput.nativeElement.onblur();
            this.outSearch();
        }
    };
    SearchComponent.prototype.onSearch = function () {
        this.searchDiv.nativeElement.classList.add(this.searchActivatedClass);
        this.searchActivated.emit('search-activated');
    };
    SearchComponent.prototype.outSearch = function () {
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
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search-box',
        templateUrl: './templates/search/search-template.html',
        styleUrls: ['styles/app/search/search-style.css']
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search-component.js.map