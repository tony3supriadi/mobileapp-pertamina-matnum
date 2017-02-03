import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  name: string;
  nopek: string;

  constructor(name: string, nopek: string) {
    this.name = name;
    this.nopek = nopek;
  }

}

@Injectable()
export class AuthService {
  currentUser : User;

  public login(credentials) {
    if (credentials.nopek === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        let access = (credentials.password === "pass" && credentials.nopek === "12345");
        this.currentUser = new User('Toni Tri Supriadi', 'tony3supriadi@gmail.com');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}