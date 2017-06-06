import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { StatItem } from '../models/index'
import { StorageService } from '../shared/index'

@Injectable()
export class StatsService {
    statsUpdated: EventEmitter<string> = new EventEmitter();
    statItemList: StatItem[] = [];

    constructor(private http: Http,
        private storageService: StorageService) {
        this.statItemList = this.storageService.getStats();
    }

    searchStats(searchKeyword: string): void {
        this.statItemList = this.storageService.getStats().filter(function (s) {
            console.log('each item is, ', s.itemName, searchKeyword);
            return s.itemName.includes(searchKeyword);
        });
        this.statsUpdated.emit('statsUpdated');
    }

    resetStats() {
        this.statItemList = this.storageService.getStats();
        this.statsUpdated.emit('statsUpdated');
    }

    getAllStats(): StatItem[] {
        return this.storageService.getStats();
    }
}