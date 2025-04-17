import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
// import { UserSer } from 'src/app/services/user.service';
// import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports:[CommonModule,RouterModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  editUser(id: number) {
    this.router.navigate(['/edit', id]);
  }
  createUser(){
    this.router.navigate(['/create']);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
    this.users = this.userService.getUsers();
  }
}
