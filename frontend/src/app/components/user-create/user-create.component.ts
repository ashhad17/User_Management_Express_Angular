import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  username = '';
  password = '';

  constructor(private userService: UserService, private router: Router) {}

  createUser() {
    if (this.username && this.password) {
      this.userService.addUser({ username: this.username, password: this.password });
      this.router.navigate(['/']);
    }
  }
}
