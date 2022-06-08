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
import { UpdateTaskComponent } from './componenets/update-task/update-task.component';


const appRoutes: Routes = [
  {path:'', component: TasksListComponent},
  {path:'new', component: NewTaskComponent},
  {path:'about', component: AboutComponent},
  {path:'update/:index', component: UpdateTaskComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    NewTaskComponent,
    TaskStatisticComponent,
    NavigationComponent,
    AboutComponent,
    UpdateTaskComponent
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
