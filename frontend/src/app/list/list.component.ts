import { Component, OnInit } from '@angular/core';
import { List } from '../models/list.model';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public lists = [];
  public addingList = false;
  public listData = new List();

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.getAll().subscribe((response: any) => {
      this.lists = response;
      console.log('lists', this.lists)
    })
  }

  public addList() {
    this.addingList = true;
    console.log('addingList', this.addingList)
  }

  public closeAddList(event) {
    console.log('event', event)
  }

  public saveNewList(data) {
    this.listService.create(data).subscribe((response: any) => {
      this.lists.push(response);
    })
  }
}
