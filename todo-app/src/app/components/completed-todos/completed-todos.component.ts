import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.scss']
})
export class CompletedTodosComponent implements OnInit {
  completedTodos: any[] = [];

  constructor(private todoService: TodoService, private userService: UserService) {}

  ngOnInit(): void {
    this.completedTodos = this.todoService.getCompletedTodos();
  }

  getUserById(id: number) {
    return this.userService.getUserById(id)?.firstName;
  }

  onCheckboxChange(todo: any) {
    this.todoService.updateTodoStatus(todo.id, todo.completed);
  }
}
