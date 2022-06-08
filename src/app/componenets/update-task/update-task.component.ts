import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  public index:number = 0
  public name:string = ""
  public type:string = ""

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['index']
    this.name = this.taskService.taskList[this.index].name
    this.type = this.taskService.taskList[this.index].type
  }

  public updateTask() {
    this.taskService.updateTask(this.index,this.name,this.type)
    this.router.navigate(['/'])
  }

}
