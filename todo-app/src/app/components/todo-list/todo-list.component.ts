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
  filteredTodos: any[] = [];
  searchTerm: string = '';

  constructor(private todoService: TodoService, private userService: UserService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.filteredTodos = this.todos;
  }

  getUserById(id: number) {
    return this.userService.getUserById(id);
  }

  onCheckboxChange(todo: any) {
    this.todoService.updateTodoStatus(todo.id, todo.completed);
  }

  onSearchChange(): void {
    if (this.searchTerm) {
      this.filteredTodos = this.todos.filter(todo => {
        const user = this.getUserById(todo.userId);
        return user && `${user.firstName} ${user.lastName}`.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    } else {
      this.filteredTodos = this.todos;
    }
  }
}
