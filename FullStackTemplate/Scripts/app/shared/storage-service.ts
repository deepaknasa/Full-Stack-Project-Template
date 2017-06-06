import { StatItem } from '../models/index'

export class StorageService {

    _currentUserKey: string = "currentUser";
    _statListKey: string = "statList";

    private statItemList: StatItem[] = [
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

    constructor() {
        this.setStats(this.statItemList);
    }

    setStats(statList: StatItem[]): void {
        localStorage.setItem(this._statListKey, JSON.stringify(statList));
    }

    getStats(): StatItem[] {
        let list = localStorage.getItem(this._statListKey);
        return JSON.parse(list);

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