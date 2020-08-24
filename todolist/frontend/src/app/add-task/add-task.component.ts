import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  @Output() saveTask = new EventEmitter()
  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddTaskComponent>) {}

  ngOnInit() {
    this.taskForm = this.formBuilder.group(new Task());
  }

  save() {
    console.log('taskForm', this.taskForm);
    const taskToSave = {
      title: this.taskForm.get('name').value,
      description: this.taskForm.get('description').value
    }
    console.log('taskToSave', taskToSave);
    this.saveTask.emit(taskToSave);
    this.dialogRef.close(this.taskForm);
  }

}
