import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];

  constructor(private todoService: TodoService, private userService: UserService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  getUserById(id: number) {
    return this.userService.getUserById(id)?.firstName;
  }

  onCheckboxChange(todo: any) {
    this.todoService.updateTodoStatus(todo.id, todo.completed);
  }
}
