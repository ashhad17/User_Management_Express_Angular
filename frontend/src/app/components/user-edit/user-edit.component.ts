// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { UserService } from '../../services/user.service';
// import { User } from '../../models/User';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-user-edit',
//   standalone: true,
//   imports:[CommonModule,FormsModule],
//   templateUrl: './user-edit.component.html',
//   styleUrls: ['./user-edit.component.css']
// })
// export class UserEditComponent implements OnInit {
//   user!: User;

//   constructor(
//     private route: ActivatedRoute,
//     private userService: UserService,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     const foundUser = this.userService.getUserById(id);
//     if (foundUser) this.user = { ...foundUser };
//   }

//   updateUser() {
//     this.userService.updateUser(this.user.id, {
//       username: this.user.username,
//       password: this.user.password,
//     });
//     this.router.navigate(['/']);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User = { username: '', password: '' };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserById(id).subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (err) => {
          console.error('Failed to load user', err);
        }
      });
    }
  }

  updateUser() {
    if (!this.user._id) return;
    this.userService.updateUser(this.user._id, this.user).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Failed to update user', err);
      }
    });
  }
}
