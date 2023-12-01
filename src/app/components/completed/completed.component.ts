import { Component, OnInit } from '@angular/core';
import { ListItemService } from 'src/app/service/list-item.service';
import { Interface } from 'src/app/Interface/interface';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  inputvalue: string = '';
  todos: Interface[] = [];
  counter: number = 1;
  message: boolean = false;
  constructor(private srv: ListItemService) {}

  async ngOnInit() {
    await this.timeTwoSec();
    this.message = true;
    this.todos = this.srv.getItem();
    console.log('patate');
  }
  async remove(listitem: Interface) {
    await this.timeTwoSec();
    const indexofListitem = this.todos.indexOf(listitem);
    this.todos.splice(indexofListitem, 1);
  }

  timeTwoSec(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = 'completato dopo due secondi';
        resolve(result);
      }, 2000);
    });
  }
}
