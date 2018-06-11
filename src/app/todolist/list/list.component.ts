import { ListItem } from './../models/listItem';
import { ListService } from './../list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listItems: ListItem[] = [];
  completedListItems: ListItem[] = [];

  constructor(private listService: ListService) {
    this.listItems = listService.listItems;
    this.completedListItems = listService.completedListItems;
  }

  ngOnInit() {
  }

  completed(listItem: ListItem) {
    this.listService.completed(listItem);
    this.listItems = this.listService.listItems;
    this.completedListItems = this.listService.completedListItems;
  }

  todoAgain(listItem: ListItem) {
    this.listService.todoAgain(listItem);
    this.listItems = this.listService.listItems;
    this.completedListItems = this.listService.completedListItems;
  }

  edit(listItem: ListItem) {
    listItem.editing = true;
  }

  save(listItem: ListItem) {
    listItem.editing = false;
  }

  delete(listItem: ListItem) {
    this.listService.delete(listItem);
    this.listItems = this.listService.listItems;
    this.completedListItems = this.listService.completedListItems;
  }
}
