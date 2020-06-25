import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddTaskComponent>) {}

  ngOnInit() {
    this.taskForm = this.formBuilder.group(new Task());
  }

  save() {
    this.dialogRef.close(this.taskForm);
  }

}
