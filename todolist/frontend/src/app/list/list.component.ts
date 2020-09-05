import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from '../models/list.model';
import { AddListComponent } from '../add-list/add-list.component';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  dialogRef: MatDialogRef<AddListComponent>;
  public lists = [];
  public addingList = false;
  public listData = new List();

  constructor(private dialog: MatDialog,
    private listService: ListService) {}

  ngOnInit() {
    this.listService.getAll().subscribe((response: any) => {
      console.log('response', response);
      this.lists = response;
    })
  }

  public addList() {
    console.log('adding List');
    this.openDialog();
  }

  public openDialog() {
    this.dialogRef = this.dialog.open(AddListComponent, {
      width: '25em',
      data: this.listData
    });

    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.lists.push(result.value);
        console.log('result', result)
        this.saveNewList(result.value);
      }
    });
  }

  public saveNewList(data) {
    console.log('data', data);
    this.listService.create(data).subscribe((response: any) => {
      console.log('response', response);
    })
  }
}
