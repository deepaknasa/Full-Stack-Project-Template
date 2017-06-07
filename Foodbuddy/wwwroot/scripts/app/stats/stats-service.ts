import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { StatItem } from '../models/index'
import { StorageService } from '../shared/index'

@Injectable()
export class StatsService {
    statsUpdated: EventEmitter<StatItem[]> = new EventEmitter();
    statItemList: StatItem[] = [];

    constructor(private http: Http,
        private storageService: StorageService) {
        this.statItemList = this.storageService.getStats();
    }

    searchStats(searchKeyword: string): StatItem[] {
        this.statItemList = this.storageService.getStats().filter(function (s) {
            //console.log('each item is, ', s.itemName, searchKeyword);
            return s.itemName.includes(searchKeyword);
        });
        this.statsUpdated.emit(this.statItemList.slice());
        return this.statItemList.slice();
    }

    resetStats() {
        this.statItemList = this.storageService.getStats();
        this.statsUpdated.emit(this.statItemList.slice());
    }

    getAllStats(): StatItem[] {
        return this.storageService.getStats();
    }
}