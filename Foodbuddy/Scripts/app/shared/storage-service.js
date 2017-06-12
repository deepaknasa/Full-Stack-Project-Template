"use strict";
var StorageService = (function () {
    //= [
    //    { foodName: 'potato', supplyLeft: 10 },
    //    { foodName: 'apple', supplyLeft: 23 },
    //    { foodName: 'rasberry', supplyLeft: 44 },
    //    { foodName: 'eggs', supplyLeft: 21 },
    //    { foodName: 'rice', supplyLeft: 35 },
    //    { foodName: 'tomato', supplyLeft: 67 },
    //    { foodName: 'green chilli', supplyLeft: 99 },
    //    { foodName: 'beetroot', supplyLeft: 82 },
    //    { foodName: 'sugar', supplyLeft: 91 },
    //    { foodName: 'rasberry', supplyLeft: 43 },
    //    { foodName: 'eggs', supplyLeft: 19 },
    //    { foodName: 'rice', supplyLeft: 32 },
    //    { foodName: 'tomato', supplyLeft: 57 },
    //    { foodName: 'green chilli', supplyLeft: 59 },
    //    { foodName: 'beetroot', supplyLeft: 89 },
    //    { foodName: 'sugar', supplyLeft: 91 },
    //    { foodName: 'salt', supplyLeft: 0 },
    //    { foodName: 'orange', supplyLeft: 70 }
    //];
    function StorageService() {
        this._currentUserKey = "currentUser";
        this._statListKey = "statList";
        this.setStats(this.FoodStatList);
    }
    StorageService.prototype.setStats = function (statList) {
        localStorage.setItem(this._statListKey, JSON.stringify(statList));
    };
    StorageService.prototype.getStats = function () {
        var list = localStorage.getItem(this._statListKey);
        if (list !== "undefined") {
            return JSON.parse(list);
        }
        else {
            return;
        }
    };
    StorageService.prototype.getCurrentUser = function () {
        return localStorage.getItem(this._currentUserKey);
    };
    StorageService.prototype.setCurrentUser = function (user) {
        localStorage.setItem(this._currentUserKey, user);
    };
    StorageService.prototype.clearSession = function () {
        localStorage.removeItem(this._currentUserKey);
    };
    return StorageService;
}());
exports.StorageService = StorageService;
//# sourceMappingURL=storage-service.js.map