import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { List } from '../models/list.model';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  listForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddListComponent>) {}

  ngOnInit() {
    this.listForm = this.formBuilder.group(new List());
  }

  save() {
    console.log('taskForm', this.listForm);
    this.dialogRef.close(this.listForm);
  }
}
