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
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MenuModule } from 'primeng/menu'
import { DialogModule } from 'primeng/dialog'

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
import { LoggedInView } from './views/loggedinview/loggedinview.component';
import { SideMenuComponent } from './side-menu/side-menu.component'


const routes = [
  {
    path: '', component: LoggedInView,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'lists',
        component: ListComponent
      },
    ]
  },
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
    SignupComponent,
    LoggedInView,
    SideMenuComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatListModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatGridListModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    MatToolbarModule,
    CardModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    InputTextModule,
    PasswordModule,
    MenuModule,
    DialogModule
  ],
  entryComponents: [AddTaskComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
