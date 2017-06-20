"use strict";
var StorageService = (function () {
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