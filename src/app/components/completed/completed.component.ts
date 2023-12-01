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
  constructor(private srv: ListItemService) {}

  ngOnInit(): void {
    this.todos = this.srv.getItem();
  }
  remove(listitem: Interface): void {
    const indexofListitem = this.todos.indexOf(listitem);
    this.todos.splice(indexofListitem, 1);
  }
}
