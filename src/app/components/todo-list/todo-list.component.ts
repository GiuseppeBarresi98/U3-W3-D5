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
  message: boolean = false;
  isConfirmed!: boolean;

  constructor(private srv: ListItemService) {}

  async addTask() {
    await this.timeTwoSec();
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

  timeTwoSec(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = 'completato dopo due secondi';
        resolve(result);
      }, 2000);
    });
  }

  caricaTodos(): void {
    this.todos = this.srv.getItem();
    this.isConfirmed = this.todos.every((todo) => todo.completed === true);

    console.log(this.todos);
    this.counter++;
  }

  async confirmed(listitem: Interface) {
    await this.timeTwoSec();
    listitem.completed = true;
    this.isConfirmed = this.todos.every((todo) => todo.completed === true);
  }

  async remove(listitem: Interface) {
    await this.timeTwoSec();
    const indexofListitem = this.todos.indexOf(listitem);
    this.todos.splice(indexofListitem, 1);
    this.isConfirmed = this.todos.every((todo) => todo.completed === true);
  }
  async ngOnInit() {
    await this.timeTwoSec();
    this.message = true;
    this.caricaTodos();
    console.log('patate');
  }
}
