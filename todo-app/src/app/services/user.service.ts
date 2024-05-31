import { Injectable } from '@angular/core';
import { USERS } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = USERS;

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }
}
