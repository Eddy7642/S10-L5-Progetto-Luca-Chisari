import { Injectable } from '@angular/core';
import { TODOS } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = TODOS;

  getTodos() {
    return this.todos;
  }

  getCompletedTodos() {
    return this.todos.filter(todo => todo.completed);
  }

  updateTodoStatus(id: number, completed: boolean) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = completed;
    }
  }
}
