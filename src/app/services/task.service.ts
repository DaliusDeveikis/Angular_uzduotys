import { EventEmitter, Injectable } from '@angular/core';
import { Tasks } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public taskList: Tasks[] = [];
  public onTaskChange = new EventEmitter()

  constructor() { 
  }

  public addTask (name:string, type:string) {
    this.taskList.push(new Tasks(name,type))
    this.onTaskChange.emit()
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

  public deleteTask(n: number) {
    this.taskList.splice(n,1)
    localStorage.setItem("TaskList", JSON.stringify(this.taskList));
    this.onTaskChange.emit()
  }

  public updateTask(index:number,name:string,type:string) {
    this.taskList[index].name = name
    this.taskList[index].type = type
    this.setTaskLocalStorage()
  }
}
