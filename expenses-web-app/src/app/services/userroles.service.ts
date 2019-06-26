import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserRole } from '../models/userroles';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

//@Injectable({ providedIn: 'root' })
//export class UserService {
//     private usersSubject: BehaviorSubject<any>;
//    public users: any;

//    constructor(private http: HttpClient) {
//      this.usersSubject = new BehaviorSubject<any>(null);
//    }

//    getAllUsers() : Observable<any> {
//        return this.http.get<any>(
//            `https://localhost:44363/api/users`);

//         //return this.http.get<any>(`https://localhost:44363/api/users`)
//         //    .pipe(map(response => {
//         //    this.users = response;
//         //    this.usersSubject.next(this.users);
//         //        return response;
//         //    }));
//    }
//}

@Injectable({ providedIn: 'root' })
export class UserRoleService {
  private userRoleSubject: BehaviorSubject<UserRole[]>;
  public userroles: UserRole[];

  constructor(private http: HttpClient) {
    this.userRoleSubject = new BehaviorSubject<UserRole[]>([]);
  }

  getAllUserRoles() {


    return this.http.get<UserRole[]>(`https://localhost:44363/api/userroles`)
      .pipe(map(response => {
        this.userroles = response;
        this.userRoleSubject.next(this.userroles);
        return response;
      }));
  }
}