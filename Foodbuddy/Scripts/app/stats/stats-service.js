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
    function StatsService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.statsUpdated = new core_1.EventEmitter();
        this.statItemList = [];
        this.statItemList = this.storageService.getStats();
    }
    StatsService.prototype.searchStats = function (searchKeyword) {
        this.statItemList = this.storageService.getStats().filter(function (s) {
            //console.log('each item is, ', s.itemName, searchKeyword);
            return s.itemName.includes(searchKeyword);
        });
        this.statsUpdated.emit(this.statItemList.slice());
        return this.statItemList.slice();
    };
    StatsService.prototype.resetStats = function () {
        this.statItemList = this.storageService.getStats();
        this.statsUpdated.emit(this.statItemList.slice());
    };
    StatsService.prototype.getAllStats = function () {
        return this.storageService.getStats();
    };
    return StatsService;
}());
StatsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        index_1.StorageService])
], StatsService);
exports.StatsService = StatsService;
//# sourceMappingURL=stats-service.js.map