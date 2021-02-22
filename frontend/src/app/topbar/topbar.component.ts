import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  items: MenuItem[];
  @Output() showNav: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Lists',
        routerLink: ['/lists'],
        routerLinkActiveOptions: { exact: true },
      }
    ]
  }

  checkActiveState(givenLink): boolean {
    console.log(this.router.url)
    if (this.router.url.indexOf(givenLink) === -1) {
      return false;
    } else {
      return true;
    }
  }

  toggleNavBar() {
    this.showNav.emit();
  }

}
