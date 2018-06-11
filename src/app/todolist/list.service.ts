import { ListItem } from './models/listItem';
import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
  listItems: ListItem[] = [];
  completedListItems: ListItem[] = [];

  constructor() { }

  add(listItem: string) {
    this.listItems.push({
      listItem: listItem,
      completed: false
    });
  }

  completed(listItem: ListItem) {
    this.listItems = this.listItems.filter(function(el) {
      return el.listItem !== listItem.listItem;
    });

    listItem.completed = true;
    this.completedListItems.push(listItem);
  }

  todoAgain(listItem: ListItem) {
    this.completedListItems = this.completedListItems.filter(function(el) {
      return el.listItem !== listItem.listItem;
    });

    listItem.completed = false;
    this.listItems.push(listItem);
  }

  delete(listItem: ListItem) {
    this.completedListItems = this.completedListItems.filter(function(el) {
      return el.listItem !== listItem.listItem;
    });

    this.listItems = this.listItems.filter(function(el) {
      return el.listItem !== listItem.listItem;
    });
  }
}
