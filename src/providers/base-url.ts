import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseUrl {

  url: string = "http://10.54.52.111/matmon/api/service";
  api: string = "VG9uaSBUcmkgU3VwcmlhZGkgJiYgS2FydGlrYSBQYW5nZXN0dQ";

  constructor(public http: Http) {}

  getUrl() {
    return this.url;
  }

  getApi() {
    return this.api;
  }

}
