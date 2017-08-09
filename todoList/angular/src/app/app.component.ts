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
  title = 'The concert bucketlist';
  todos: Todo[] = [{
    completed: false,
    title: 'Atlas Genius'
  },{
    completed:false,
    title: 'Adele'
  },{
    completed:false,
    title: 'Jamiroquai'
  },{
    completed:true,
    title: 'Foals'
  }
];
  
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
 toggleFilter(){

    this.filter.completed = !this.filter.completed;
  }

  remaining = function() {
    var count = 0;
    this.todos.forEach(todo => {
      count += todo.completed ? 0 : 1;
    });
    return count;
  }
}
