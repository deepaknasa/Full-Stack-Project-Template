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
var platform_browser_1 = require("@angular/platform-browser");
var StatisticsComponent = (function () {
    function StatisticsComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.statItemList = [
            { itemName: 'potato', itemStockLeft: 10 },
            { itemName: 'apple', itemStockLeft: 23 },
            { itemName: 'rasberry', itemStockLeft: 44 },
            { itemName: 'eggs', itemStockLeft: 21 },
            { itemName: 'rice', itemStockLeft: 35 },
            { itemName: 'tomato', itemStockLeft: 67 },
            { itemName: 'green chilli', itemStockLeft: 99 },
            { itemName: 'beetroot', itemStockLeft: 82 },
            { itemName: 'sugar', itemStockLeft: 91 },
            { itemName: 'salt', itemStockLeft: 0 },
            { itemName: 'orange', itemStockLeft: 70 }
        ];
        this.next = 0;
        this.statItemListLag = [];
        this.sortItems();
        this.doNext();
    }
    StatisticsComponent.prototype.sortItems = function () {
        this.statItemList = this.statItemList.sort(function (a, b) {
            return a.itemStockLeft < b.itemStockLeft ? -1 : a.itemStockLeft > b.itemStockLeft ? 1 : 0;
        });
    };
    StatisticsComponent.prototype.doNext = function () {
        if (this.next < this.statItemList.length) {
            this.statItemListLag.push(this.statItemList[this.next++]);
        }
    };
    StatisticsComponent.prototype.removeMe = function (i) {
        this.statItemListLag.splice(i, 1);
    };
    StatisticsComponent.prototype.getBackground = function (stock) {
        var color = this.getColor(stock);
        var result = {
            'background-color': color
        };
        return result;
    };
    StatisticsComponent.prototype.getColor = function (stock) {
        if (stock < 41) {
            //red zone.
            var percent = 1 - (0.01 * (stock * 2.5));
            return "rgba(255, 0, 0, " + percent + ")";
        }
        else if (stock < 61) {
            //Amber zone. yellow
            var percent = (0.01 * ((stock - 40) * 5));
            return "rgba(255, 242, 153, " + percent + ")";
        }
        else {
            //green zone.
            var percent = (0.01 * ((stock - 60) * 2.5));
            return "rgba(126, 190, 146, " + percent + ")";
        }
    };
    return StatisticsComponent;
}());
__decorate([
    core_1.ViewChild('stockLeft'),
    __metadata("design:type", core_1.ElementRef)
], StatisticsComponent.prototype, "leftStock", void 0);
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
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], StatisticsComponent);
exports.StatisticsComponent = StatisticsComponent;
var FruitItem = (function () {
    function FruitItem() {
    }
    return FruitItem;
}());
exports.FruitItem = FruitItem;
//# sourceMappingURL=stats-component.js.map