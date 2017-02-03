import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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

  public show() {

  }
  
  public find(credentials) {
    if (credentials.matnum === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        let access = (credentials.matnum === "123");
        observer.next(access);
        observer.complete();
      });
    }
  }

}