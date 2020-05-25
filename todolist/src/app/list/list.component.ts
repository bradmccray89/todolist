import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public showList = false;
  public tasks = [];

  constructor() { }

  ngOnInit(): void {
  }

  public addTask() {
    console.log(`addTask`);
    this.tasks.push('newItem');
  }

}
