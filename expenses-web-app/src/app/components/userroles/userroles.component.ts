import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/models/userroles';
import { UserRoleService } from 'src/app/services/userroles.service';

@Component({
  selector: 'app-userroles',
  templateUrl: './userroles.component.html',
  styleUrls: ['./userroles.component.scss']
})
export class UserRolesComponent implements OnInit {

  public userroles: any = null;

  public displayedColumns: string[] = ['Name', 'Description'];

  constructor(private userrolesService: UserRoleService) {
    this.getAllUserRoles();
  }

  ngOnInit() {
  }

  getAllUserRoles() {
    this.userrolesService.getAllUserRoles().subscribe(ur => {
      this.userroles = ur;
      console.log(ur);
    });
  }
}