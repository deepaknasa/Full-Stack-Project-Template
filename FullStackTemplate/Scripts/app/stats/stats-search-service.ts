import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { StatItem } from '../models/index'

@Injectable()
export class StatsSearchService {
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

    constructor(private http: Http) {
    }

    searchStats(searchKeyword: string): StatItem[] {
        if (searchKeyword === '') {
            return this.statItemList;
        }
        return this.statItemList.filter(s => { s.itemName === searchKeyword });

        //let body = JSON.stringify({ Email: model.email, Password: model.password, RememberMe: model.rememberMe });
        //let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        //let options = new RequestOptions({ headers: headers });

        //return this.http.post('/Account/Login', body, options)
        //    .map((response: Response) => {
        //        // login successful if there's a jwt token in the response
        //        console.log('user response:', response.text());
        //        if (response && response.status === 200) {
        //            // store user details and jwt token in local storage to keep user logged in between page refreshes
        //            this.setCurrentUser(response.text());
        //            this.sessionUpdated();
        //            console.log('emit:event:sessionUpdated', this._session);
        //        }
        //    });
    }
}