import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  menuItems: MenuItem[]

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Lists',
        icon: 'pi pi-list',
        routerLink: '/lists'
      },
      {
        label: 'Groups',
        icon: 'pi pi-users',
        routerLink: '/groups'
      }
    ]
  }

}
