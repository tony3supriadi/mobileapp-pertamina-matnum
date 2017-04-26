import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { BaseUrl } from './base-url';

export class Material {
  public matnum: string;
  public deskripsi: string;
  public stok: number;
  public unit: string;
  public mpn: string;

  constructor(matnum: string, deskripsi: string, stok: number, unit: string, mpn: string) {
    this.matnum = matnum;
    this.deskripsi = deskripsi;
    this.stok = stok;
    this.unit = unit;
    this.mpn = mpn;
  }

}

@Injectable()
export class MaterialService {
  currentMaterial : Material;

  constructor(public http: Http, public _baseUrl: BaseUrl) {
  }

  public show(title) {
    return this.http.get(this._baseUrl.getUrl() + '/show?title=' + title + '&X-API-KEY=' + this._baseUrl.getApi())
        .map(res => res.json());
  }
  
  public find(num) {
    return this.http.get(this._baseUrl.getUrl() + '/find/' + num + '?X-API-KEY=' + this._baseUrl.getApi())
        .map(res => res.json());
  }

}