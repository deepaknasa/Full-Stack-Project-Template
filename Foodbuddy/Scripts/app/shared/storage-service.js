"use strict";
var StorageService = (function () {
    function StorageService() {
        this._currentUserKey = "currentUser";
        this._statListKey = "statList";
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
        this.setStats(this.statItemList);
    }
    StorageService.prototype.setStats = function (statList) {
        localStorage.setItem(this._statListKey, JSON.stringify(statList));
    };
    StorageService.prototype.getStats = function () {
        var list = localStorage.getItem(this._statListKey);
        return JSON.parse(list);
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