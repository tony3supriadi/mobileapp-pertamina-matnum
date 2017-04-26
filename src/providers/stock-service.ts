import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Stock } from '../model/stock-model';

import { BaseUrl } from './base-url';

@Injectable()
export class StockService {

  constructor(
    public http: Http,
    public _baseUrl: BaseUrl
    ) {}

  getStock(num) {
    return this.http.get(this._baseUrl.getUrl() + "/stock/" + num + "?X-API-KEY=" + this._baseUrl.getApi())
              .map((res:Response) => res.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  
  }

}
