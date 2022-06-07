import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksListComponent } from './componenets/tasks-list/tasks-list.component';
import { FormsModule } from '@angular/forms';
import { NewTaskComponent } from './componenets/new-task/new-task.component';
import { TaskStatisticComponent } from './componenets/task-statistic/task-statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    NewTaskComponent,
    TaskStatisticComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
