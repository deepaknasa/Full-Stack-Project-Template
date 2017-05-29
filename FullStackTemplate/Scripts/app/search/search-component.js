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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//import { Session } from './models/index';
//import { AuthenticationService } from './auth/index';
var SearchComponent = (function () {
    function SearchComponent(doc) {
        this.doc = doc;
        this.searchActivated = new core_1.EventEmitter();
        this.searchDeactivated = new core_1.EventEmitter();
    }
    SearchComponent.prototype.onSearch = function () {
        this.searchActivated.emit('search-activated');
    };
    SearchComponent.prototype.outSearch = function () {
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
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search-box',
        templateUrl: './templates/search/search-template.html'
    }),
    __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [Object])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search-component.js.map