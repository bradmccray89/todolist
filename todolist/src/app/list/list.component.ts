import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public tasks: string[] = ['Task1', 'Task2', 'Task3'];

  constructor() { }

  ngOnInit(): void {
  }

}
