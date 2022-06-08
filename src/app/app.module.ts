import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksListComponent } from './componenets/tasks-list/tasks-list.component';
import { FormsModule } from '@angular/forms';
import { NewTaskComponent } from './componenets/new-task/new-task.component';
import { TaskStatisticComponent } from './componenets/task-statistic/task-statistic.component';
import { NavigationComponent } from './componenets/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componenets/about/about.component';


const appRoutes: Routes = [
  {path:'', component: TasksListComponent},
  {path:'new', component: NewTaskComponent},
  {path:'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    NewTaskComponent,
    TaskStatisticComponent,
    NavigationComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
