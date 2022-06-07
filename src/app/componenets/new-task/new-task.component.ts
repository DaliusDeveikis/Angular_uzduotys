import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service'
import { TasksListComponent } from '../tasks-list/tasks-list.component';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  public name: string = ''
  public type: string = ''

  constructor(private taskService: TaskService) {
   }
  
  public addTask () {
    this.taskService.addTask(this.name,this.type)
    this.taskService.setTaskLocalStorage()
  }

  ngOnInit(): void {
  }

}
