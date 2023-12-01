import { Injectable } from '@angular/core';
import { Interface } from '../Interface/interface';

@Injectable({
  providedIn: 'root',
})
export class ListItemService {
  private myArrList: Interface[] = [];

  constructor() {}

  getItem(): any {
    return this.myArrList;
  }

  pushArr(obj: Interface): void {
    this.myArrList.push(obj);
  }
}
