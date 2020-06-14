import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddTaskComponent>
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: '',
      description: ''
    });
  }

  save(form) {
    this.dialogRef.close(`${form}`);
  }

}
