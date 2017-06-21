import { FoodStat } from '../models/index'
import { Session } from '../models/index';

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

    getCurrentUser(): Session {
        let userSession: Session = JSON.parse(localStorage.getItem(this._currentUserKey));
        return userSession;
    }

    setCurrentUser(userSession: Session) {
        localStorage.setItem(this._currentUserKey, JSON.stringify(userSession));
    }

    clearSession() {
        localStorage.removeItem(this._currentUserKey);
    }
}