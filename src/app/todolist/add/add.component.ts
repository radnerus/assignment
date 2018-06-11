import { ListService } from './../list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  listItem: string;

  constructor(public listService: ListService) { }

  ngOnInit() {
  }

  add() {
    this.listService.add(this.listItem);
    this.listItem = '';
  }

}
