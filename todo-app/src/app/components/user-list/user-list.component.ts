import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService, private todoService: TodoService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  getUserTodos(userId: number) {
    return this.todoService.getTodos().filter(todo => todo.userId === userId);
  }

  onCheckboxChange(todo: any) {
    this.todoService.updateTodoStatus(todo.id, todo.completed);
  }
}
