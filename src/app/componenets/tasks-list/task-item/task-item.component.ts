import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tasks } from 'src/app/models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Tasks|null = null;
  @Input() index: number = 0;

  @Output() deleteTsk = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  public deleteTask() {
    this.deleteTsk.emit(this.index)
  }

}
