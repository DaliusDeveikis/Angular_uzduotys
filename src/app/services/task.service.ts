import { Injectable } from '@angular/core';
import { Tasks } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public taskList: Tasks[] = [];

  constructor() { 
  }

  public addTask (name:string, type:string) {
    this.taskList.push(new Tasks(name,type))
  }

  public setTaskLocalStorage() {
    localStorage.setItem("TaskList", JSON.stringify(this.taskList));
  }

  public getTaskLocalStorage() {
    let tasks = localStorage.getItem("TaskList");
    if (tasks != null){
      this.taskList = JSON.parse(tasks);
    }
    return this.taskList;
  }

}
