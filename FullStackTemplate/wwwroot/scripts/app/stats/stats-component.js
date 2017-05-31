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
var StatisticsComponent = (function () {
    function StatisticsComponent() {
        this.statItemList = [
            { itemName: 'potato' },
            { itemName: 'apple' },
            { itemName: 'rasberry' },
            { itemName: 'tomato' },
            { itemName: 'orange' }
        ];
        this.next = 0;
        this.statItemListLag = [];
        this.doNext();
    }
    StatisticsComponent.prototype.doNext = function () {
        if (this.next < this.statItemList.length) {
            this.statItemListLag.push(this.statItemList[this.next++]);
        }
    };
    StatisticsComponent.prototype.removeMe = function (i) {
        this.statItemListLag.splice(i, 1);
    };
    return StatisticsComponent;
}());
StatisticsComponent = __decorate([
    core_1.Component({
        selector: 'statistics',
        templateUrl: './templates/stats/stats-template.html',
        styleUrls: ['styles/app/stats/stats-style.css'],
        animations: [
            core_1.trigger('flyInOut', [
                core_1.state('in', core_1.style({})),
                core_1.transition('void => *', [
                    core_1.animate(400, core_1.keyframes([
                        core_1.style({ opacity: 0, offset: 0 }),
                        core_1.style({ opacity: 1, offset: 1 })
                    ]))
                ]),
                core_1.transition('* => void', [
                    core_1.animate(400, core_1.keyframes([
                        core_1.style({ opacity: 1, offset: 0 }),
                        core_1.style({ opacity: 0, offset: 1 })
                    ]))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], StatisticsComponent);
exports.StatisticsComponent = StatisticsComponent;
var FruitItem = (function () {
    function FruitItem() {
    }
    return FruitItem;
}());
exports.FruitItem = FruitItem;
//# sourceMappingURL=stats-component.js.map