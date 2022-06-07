import { Component, OnInit } from '@angular/core';
import { TaskService } from  'src/app/services/task.service'

@Component({
  selector: 'app-task-statistic',
  templateUrl: './task-statistic.component.html',
  styleUrls: ['./task-statistic.component.css']
})
export class TaskStatisticComponent implements OnInit {
  public taskCount:number = 0;
  public skubus: number = 0
  public rutininis: number = 0
  public neskubus: number = 0
  public ypac_skubus: number = 0

  // dependence injection
  constructor(private TaskService: TaskService) {
   }

  ngOnInit(): void {
    this.taskCounting()
    this.TaskService.onTaskChange.subscribe(()=> {
      this.taskCounting()
    })
  }

  public taskCounting () {
    this.skubus = 0
    this.rutininis = 0
    this.neskubus = 0
    this.ypac_skubus = 0
    
    this.taskCount = this.TaskService.taskList.length
    this.TaskService.taskList.forEach(task => {
      switch(task.type) {
        case 'skubus':
          this.skubus++
          break;
        case 'rutininis':
          this.rutininis++
          break;
        case 'neskubus':
          this.neskubus++
          break;
        case 'ypac_skubus':
          this.ypac_skubus++
          break;
      }
    })
  }
}
