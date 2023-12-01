import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CompletedComponent } from './components/completed/completed.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'completed', component: CompletedComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoListComponent,
    CompletedComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
