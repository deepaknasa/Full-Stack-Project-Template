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
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.searchActivatedClass = 'search-activated';
    }
    HeaderComponent.prototype.searchActivated = function (searchActivated) {
        console.log('inside searchActivated. Param value is : ', searchActivated);
        this.header.nativeElement.classList.add(this.searchActivatedClass);
    };
    HeaderComponent.prototype.searchDeactivated = function (searchEvent) {
        console.log('inside searchDeactivated. Param value is : ', searchEvent);
        this.header.nativeElement.classList.remove(this.searchActivatedClass);
    };
    return HeaderComponent;
}());
__decorate([
    core_1.ViewChild('headerElem'),
    __metadata("design:type", core_1.ElementRef)
], HeaderComponent.prototype, "header", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: './templates/header/header-template.html',
        styleUrls: ['styles/app/header/header-style.css']
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header-component.js.map