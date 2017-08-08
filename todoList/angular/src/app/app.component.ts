import { Component, Pipe, PipeTransform } from '@angular/core';

interface Todo {  
  completed: boolean;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'app';
  todos: Todo[] = [{
    completed: false,
    title: 'Atlas Genius'
  },{
    completed:false,
    title: 'Coldplay'
  }];

  filter = {
  completed: false
  };

  addTodo(title){
    this.todos.push({title, completed : false})
  }

  removeTodo(id) {
    this.todos.splice(id, 1);
  }

 toggleTodo(todo:Todo){
    todo.completed = !todo.completed;
  }
  
}
