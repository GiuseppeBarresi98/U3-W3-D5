import { Component, OnInit } from '@angular/core';
import { ListItemService } from 'src/app/service/list-item.service';
import { Interface } from 'src/app/Interface/interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  inputvalue: string = '';
  todos: Interface[] = [];
  counter: number = 1;
  isConfirmed!: boolean;

  constructor(private srv: ListItemService) {}

  addTask(): void {
    if (this.inputvalue !== '') {
      const newTodo: Interface = {
        id: this.counter,
        title: this.inputvalue,
        completed: false,
      };

      this.srv.pushArr(newTodo);

      this.inputvalue = '';

      this.caricaTodos();
    }
  }

  caricaTodos(): void {
    this.todos = this.srv.getItem();
    this.isConfirmed = this.todos.every((todo) => todo.completed === true);

    console.log(this.todos);
    this.counter++;
  }

  confirmed(listitem: Interface): void {
    listitem.completed = true;
    this.isConfirmed = this.todos.every((todo) => todo.completed === true);
  }

  remove(listitem: Interface): void {
    const indexofListitem = this.todos.indexOf(listitem);
    this.todos.splice(indexofListitem, 1);
    this.isConfirmed = this.todos.every((todo) => todo.completed === true);
  }
  ngOnInit(): void {
    this.caricaTodos();
  }
}
