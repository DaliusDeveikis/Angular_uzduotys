import { Injectable } from '@angular/core';
import { Tasks } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public taskList: Tasks[] = [];

  constructor() { }

  public addTask (name:string, type:string) {
    this.taskList.push(new Tasks(name,type))
  }
}
