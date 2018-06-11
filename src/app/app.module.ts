import { ListService } from './todolist/list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AddComponent } from './todolist/add/add.component';
import { ListComponent } from './todolist/list/list.component';

const appRoutes: Routes = [
  { path: 'todolist', component: TodolistComponent },
  { path: '', redirectTo: '/todolist', pathMatch: 'full' },
  { path: '**', redirectTo: '/todolist', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodolistComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
