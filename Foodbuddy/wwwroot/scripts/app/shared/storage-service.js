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
        var userSession = JSON.parse(localStorage.getItem(this._currentUserKey));
        return userSession;
    };
    StorageService.prototype.setCurrentUser = function (userSession) {
        localStorage.setItem(this._currentUserKey, JSON.stringify(userSession));
    };
    StorageService.prototype.clearSession = function () {
        localStorage.removeItem(this._currentUserKey);
    };
    return StorageService;
}());
exports.StorageService = StorageService;
//# sourceMappingURL=storage-service.js.map