import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes = [
  { path: '', component: AppComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
