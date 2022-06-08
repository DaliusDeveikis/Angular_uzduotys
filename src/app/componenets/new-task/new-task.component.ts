import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  public name: string = ''
  public type: string = ''

  constructor(
    private taskService: TaskService,
    private router: Router
    ) {
   }
  
  public addTask () {
    this.taskService.addTask(this.name,this.type)
    this.taskService.setTaskLocalStorage()
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
