import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
    apiPrefix: string = 'api/';

    constructor(private http: Http) { }

    postService(body: any, svcUrl: string): Observable<Response> {
        let jsonBody = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiPrefix + svcUrl, jsonBody, options)
            .map((response: Response) => {
                if (response && response.status === 200) {
                    return response;
                }
                else {
                    return null;
                }
            });
    }

    getService(svcUrl: string, queryString: string = ''): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiPrefix + svcUrl, options)
            .map((response: Response) => {
                if (response && response.status === 200) {
                    return response;
                }
                else {
                    return null;
                }
            });
    }
}