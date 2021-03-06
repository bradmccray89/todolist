import { Component, OnInit } from '@angular/core';

@Component({
  template: 
  `<div class="main-container d-flex flex-column">
    <app-topbar></app-topbar>
    <div class="main-content">
      <div class="nav-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>`,
})
export class LoggedInView implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
