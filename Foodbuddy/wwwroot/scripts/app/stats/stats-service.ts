import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { FoodStat } from '../models/index'
import { StorageService, HttpService } from '../shared/index'

@Injectable()
export class StatsService {
    statsUpdated: EventEmitter<FoodStat[]> = new EventEmitter();
    FoodStatList: FoodStat[] = [];

    constructor(private http: Http,
        private storageService: StorageService,
        private httpSvc: HttpService) {}
        //this.FoodStatList = this.storageService.getStats();

    searchStats(searchKeyword: string): FoodStat[] {
        this.FoodStatList = this.storageService.getStats().filter(function (s) {
            //console.log('each item is, ', s.itemName, searchKeyword);
            return s.foodName.includes(searchKeyword);
        });
        this.statsUpdated.emit(this.FoodStatList.slice());
        return this.FoodStatList.slice();
    }

    resetStats() {
        this.FoodStatList = this.storageService.getStats();
        this.statsUpdated.emit(this.FoodStatList.slice());
    }

    getAllStats(): FoodStat[] {
        let storageData = this.storageService.getStats();
        if (!!storageData == false) {
            this.httpSvc.getService('food/getFoodItems').subscribe(val => {
                console.log('data returned in stats service');
                let stats: FoodStat[] = JSON.parse(val.text());
                console.log('stats: ', stats);
                this.storageService.setStats(stats);
                this.FoodStatList = stats;
                this.statsUpdated.emit(this.FoodStatList.slice());
            });
        }
        else {
            return storageData;
        }
    }
}