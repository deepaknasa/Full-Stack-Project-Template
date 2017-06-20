import { FoodStat } from '../models/index'

export class StorageService {

    _currentUserKey: string = "currentUser";
    _statListKey: string = "statList";

    private FoodStatList: FoodStat[];

    constructor() {
        this.setStats(this.FoodStatList);
    }

    setStats(statList: FoodStat[]): void {
        localStorage.setItem(this._statListKey, JSON.stringify(statList));
    }

    getStats(): FoodStat[] {
        let list = localStorage.getItem(this._statListKey);
        if (list !== "undefined") {
            return JSON.parse(list);
        }
        else {
            return;
        }
        
    }

    getCurrentUser() {
        return localStorage.getItem(this._currentUserKey);
    }

    setCurrentUser(user: string) {
        localStorage.setItem(this._currentUserKey, user);
    }

    clearSession() {
        localStorage.removeItem(this._currentUserKey);
    }
}