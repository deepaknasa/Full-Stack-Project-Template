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
var StatsSearchService = (function () {
    function StatsSearchService(http) {
        this.http = http;
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
            { itemName: 'rasberry', itemStockLeft: 43 },
            { itemName: 'eggs', itemStockLeft: 19 },
            { itemName: 'rice', itemStockLeft: 32 },
            { itemName: 'tomato', itemStockLeft: 57 },
            { itemName: 'green chilli', itemStockLeft: 59 },
            { itemName: 'beetroot', itemStockLeft: 89 },
            { itemName: 'sugar', itemStockLeft: 91 },
            { itemName: 'salt', itemStockLeft: 0 },
            { itemName: 'orange', itemStockLeft: 70 }
        ];
    }
    StatsSearchService.prototype.searchStats = function (searchKeyword) {
        if (searchKeyword === '') {
            return this.statItemList;
        }
        return this.statItemList.filter(function (s) { s.itemName === searchKeyword; });
        //let body = JSON.stringify({ Email: model.email, Password: model.password, RememberMe: model.rememberMe });
        //let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        //let options = new RequestOptions({ headers: headers });
        //return this.http.post('/Account/Login', body, options)
        //    .map((response: Response) => {
        //        // login successful if there's a jwt token in the response
        //        console.log('user response:', response.text());
        //        if (response && response.status === 200) {
        //            // store user details and jwt token in local storage to keep user logged in between page refreshes
        //            this.setCurrentUser(response.text());
        //            this.sessionUpdated();
        //            console.log('emit:event:sessionUpdated', this._session);
        //        }
        //    });
    };
    return StatsSearchService;
}());
StatsSearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StatsSearchService);
exports.StatsSearchService = StatsSearchService;
//# sourceMappingURL=stats-search-service.js.map