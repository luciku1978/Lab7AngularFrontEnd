import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Expense } from '../models/expenses';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
    private expensesSubject: BehaviorSubject<any>;
    public expenses: any;

    constructor(private http: HttpClient) {
         this.expensesSubject = new BehaviorSubject<any>(null);
    }

    getAllExpenses() 
    // : Observable<any> 
    {
        // return this.http.get<any>(
        //     `https://localhost:44363/api/expenses`);

        return this.http.get<any>(`https://localhost:44363/api/expenses`)
            .pipe(map(response => {
                this.expenses = response;
                this.expensesSubject.next(this.expenses);
                return response;
            }));
    }
}
// Merge si cu codul de mai jos

// @Injectable({ providedIn: 'root' })
// export class ExpenseService {
//     private expensesSubject: BehaviorSubject<Expense[]>;
//     public expenses: Expense[];

//     constructor(private http: HttpClient) {
//         this.expensesSubject = new BehaviorSubject<Expense[]>([]);
//     }

//     getAllExpenses() {


//         return this.http.get<Expense[]>(`https://localhost:44363/api/expenses`)
//             .pipe(map(response => {
//                 this.expenses = response;
//                 this.expensesSubject.next(this.expenses);
//                 return response;
//             }));
//     }
// }