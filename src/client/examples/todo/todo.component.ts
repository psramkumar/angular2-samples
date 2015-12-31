import {Component} from 'angular2/core';
import {Todo} from './todo';
import {TodoList} from './todoList';
import {TodoForm} from './todoForm';
@Component({
  selector: 'todo',
  template: `
    <h2>Todo</h2>
    <span>{{remaining}} of {{todos.length}} remaining</span>
    [ <a href="javascript: false" (click)="archive()">archive</a> ]
    <todo-list [todos]="todos"></todo-list>
    <todo-form (newTask)="addTask($event)"></todo-form>`,
  directives: [TodoList, TodoForm]
})
export class TodoComponent {
  todos: Todo[] = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}
  ];
  get remaining(): number {
    return this.todos.reduce((count, todo: Todo) => count + todo.done, 0);
  }
  archive(): void {
    var oldTodos = this.todos;
    this.todos = [];
    oldTodos.forEach((todo: Todo) => {
      if (!todo.done) this.todos.push(todo);
    });
  }
  addTask(task: Todo) {
    this.todos.push(task);
  }
}