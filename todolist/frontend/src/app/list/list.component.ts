import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../models/task.model';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dialogRef: MatDialogRef<AddTaskComponent>;
  public showList = false;
  public tasks;
  public taskData = new Task();
  name = '';
  description = '';
  index = 0;

  constructor(private dialog: MatDialog,
    private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getAll();
  }

  public addTask() {
    this.openDialog();
  }

  public openDialog() {
    this.dialogRef = this.dialog.open(AddTaskComponent, {
      width: '25em',
      data: this.taskData
    });

    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result.value) this.tasks.push(result.value);
      console.log('result', result)
      this.saveNewTask(result.value);
    });
  }

  public saveNewTask(data) {
    this.taskService.create(data).subscribe(response => {
      console.log('response', response);
    })
  }

}
