import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
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
    totalExpenses = 50;
    totalExpensesPerPage = 5;
    pageSizeOptions = [1, 3, 5, 7, 9];
    public displayedColumns: string[] = ['Description', 'Type', 'Location', 'Date',  'Currency', 'Sum', 'NumberOfComments'];

    constructor(private expenseService: ExpenseService, private route: Router) {
        this.getAllExpenses();
      }

    ngOnInit() {
    }

    onChangedPage(pageData: PageEvent) {
      console.log(pageData)
    }
  

    getAllExpenses() {
        this.expenseService.getAllExpenses().subscribe(e => {
            this.expenses = e;
            console.log(e);
        });
    }

    goBack() {
      this.route.navigate(['']);
    }
}