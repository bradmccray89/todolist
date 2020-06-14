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
  dialogRef: MatDialogRef<AddTaskComponent>;
  public showList = false;
  public tasks: Task[] = [];
  public taskData = new Task('', '');
  name = '';
  description = '';
  index = 0;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public addTask() {
    console.log(`addTask`);
    this.openDialog();
  }

  public openDialog() {
    this.dialogRef = this.dialog.open(AddTaskComponent, {
      width: '25em',
      height: '15em',
      data: this.taskData
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`dialog closed! result: ${result}`);
      this.taskData = result;
    });
  }

}
