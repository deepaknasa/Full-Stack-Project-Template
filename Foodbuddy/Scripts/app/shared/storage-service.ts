import { FoodStat } from '../models/index'

export class StorageService {

    _currentUserKey: string = "currentUser";
    _statListKey: string = "statList";

    private FoodStatList: FoodStat[];
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