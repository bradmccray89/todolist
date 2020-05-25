import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../models/task.model';
import {AddTaskComponent} from '../add-task/add-task.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public showList = false;
  public tasks = [];
  public taskData = new Task('', '');
  name = '';
  description = '';
  index = 0;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public addTask() {
    this.index = this.index + 1;
    console.log(`addTask`);
    this.tasks.push(new Task('Task ' + this.index, 'this is a new task'));
  }

  public openDialog() {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '25em',
      data: this.taskData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`dialog closed! result: ${result}`);
    });
  }

}
