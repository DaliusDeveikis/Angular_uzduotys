import { Tasks } from './../../models/task';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  public taskList: Tasks[] = [];

  constructor(private TaskService: TaskService ) { 
    this.showTaskListFromLocalStorage()
  }

  public showTaskListFromLocalStorage = ()=>{
    if (this.TaskService.getTaskLocalStorage() !=null){
      this.taskList = this.TaskService.getTaskLocalStorage()
    }
  }

  public deleteTask(n:number) {
    this.TaskService.deleteTask(n)
  }

  ngOnInit(): void {
  }

}
