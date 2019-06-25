import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/models/expenses';
import { ExpenseService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

    public expenses: any = null;
    public displayedColumns: string[] = ['Description', 'Type', 'Location', 'Currency', 'Sum', 'NumberOfComments'];

    constructor(private expenseService: ExpenseService) {
        this.getAllExpenses();
      }

    ngOnInit() {
    }

    getAllExpenses() {
        // this.expenses = []
        this.expenseService.getAllExpenses().subscribe(e => {
            this.expenses = e;
            console.log(e);
        });
    }
}