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
    this.taskList.push( new Tasks("Išnešti šiukšles", "Skubus"))
    this.taskList.push( new Tasks("Išvaly kambarius", "Neskubus"))
    this.taskList.push( new Tasks("Isplauti indus", "Skubus"))
    this.taskList.push( new Tasks("Sportuoti", "Rutininis"))
  }

  ngOnInit(): void {
    this.taskList = this.TaskService.taskList
  }

}
