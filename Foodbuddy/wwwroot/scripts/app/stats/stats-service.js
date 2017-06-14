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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var index_1 = require("../shared/index");
var StatsService = (function () {
    function StatsService(http, storageService, httpSvc) {
        this.http = http;
        this.storageService = storageService;
        this.httpSvc = httpSvc;
        this.statsUpdated = new core_1.EventEmitter();
        this.FoodStatList = [];
    }
    //this.FoodStatList = this.storageService.getStats();
    StatsService.prototype.searchStats = function (searchKeyword) {
        this.FoodStatList = this.storageService.getStats().filter(function (s) {
            //console.log('each item is, ', s.itemName, searchKeyword);
            return s.foodName.toLowerCase().includes(searchKeyword.toLowerCase());
        });
        this.statsUpdated.emit(this.FoodStatList.slice());
        return this.FoodStatList.slice();
    };
    StatsService.prototype.resetStats = function () {
        this.FoodStatList = this.storageService.getStats();
        this.statsUpdated.emit(this.FoodStatList.slice());
    };
    StatsService.prototype.getAllStats = function () {
        var _this = this;
        var storageData = this.storageService.getStats();
        if (!!storageData == false) {
            this.httpSvc.getService('food/getFoodItems').subscribe(function (val) {
                console.log('data returned in stats service');
                var stats = JSON.parse(val.text());
                console.log('stats: ', stats);
                _this.storageService.setStats(stats);
                _this.FoodStatList = stats;
                _this.statsUpdated.emit(_this.FoodStatList.slice());
            });
        }
        else {
            return storageData;
        }
    };
    return StatsService;
}());
StatsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        index_1.StorageService,
        index_1.HttpService])
], StatsService);
exports.StatsService = StatsService;
//# sourceMappingURL=stats-service.js.map