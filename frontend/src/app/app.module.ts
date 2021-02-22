import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddListComponent } from './add-list/add-list.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SignupComponent } from './signup/signup.component';


const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'lists', component: ListComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    AddTaskComponent,
    TaskComponent,
    AddListComponent,
    TopbarComponent,
    SearchBarComponent,
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatListModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatGridListModule,
    ButtonModule,
    RippleModule,
    MatToolbarModule,
    CardModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    InputTextModule
  ],
  entryComponents: [AddTaskComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
