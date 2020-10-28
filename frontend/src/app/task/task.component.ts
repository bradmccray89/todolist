import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../models/task.model';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() list;
  dialogRef: MatDialogRef<AddTaskComponent>;
  public showList = false;
  public tasks;
  public taskData = new Task();

  constructor(private dialog: MatDialog,
    private taskService: TaskService) { }

  ngOnInit(): void {
    if (!this.list) {
      this.taskService.getAll().subscribe((response: any) => {
        this.tasks = response;
      });
    } else if (this.list) {
      this.taskService.findAllForListId(this.list).subscribe((response: any) => {
        this.tasks = response;

      });

    }
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
      if (result) {
        result.patchValue({
          listid: this.list.id
        });
        this.saveNewTask(result.value);
      }
    });
  }

  public saveNewTask(data) {
    this.taskService.create(data).subscribe(response => {
      this.tasks.push(response);
    })
  }
}
