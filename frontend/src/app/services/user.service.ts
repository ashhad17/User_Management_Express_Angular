// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [];
  private idCounter = 1;

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: Omit<User, 'id'>): void {
    this.users.push({ ...user, id: this.idCounter++ });
  }

  updateUser(id: number, updatedUser: Omit<User, 'id'>): void {
    const index = this.users.findIndex((u) => u.id === id);
    if (index > -1) this.users[index] = { id, ...updatedUser };
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((u) => u.id !== id);
  }

  getUserById(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }
}
