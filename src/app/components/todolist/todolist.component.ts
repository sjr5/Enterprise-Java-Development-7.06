import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  newTodo: string = '';
  todos: Todo[] = [];

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ text: this.newTodo, completed: false, postponed: false });
      this.newTodo = '';
    }
  }

  markComplete(todo: Todo) {
    todo.completed = !todo.completed;
  }

  postpone(todo: Todo) {
    todo.postponed = !todo.postponed;
  }

  delete(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }

  clean() {
    this.todos = this.todos.filter(t => !t.completed);
  }

  restore() {
    this.todos.forEach(t => (t.postponed = false));
  }
}

interface Todo {
  text: string;
  completed: boolean;
  postponed: boolean;
}

