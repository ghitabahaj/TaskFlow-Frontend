import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OnLoading, TaskState, getAllTask } from './state/task.reducer';
import { TaskDTO } from './task.interfaces';
import { createTask, getAllTasks } from './state/task.actions';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit  {

  louding? : boolean ;
  tasks?: TaskDTO[];

  constructor(private store: Store<TaskState>) { }

  ngOnInit(): void {
    this.store.select(OnLoading).subscribe(
      (loading) => {
          this.louding = loading;
          console.log(this.louding);
      }
    )
    this.store.select(getAllTask).subscribe(
      (task) => { this.tasks = task ; console.log(this.tasks); }
    )
  }

  addtask(taskDTO: TaskDTO){
    this.store.dispatch(createTask({taskDTO}))
  }

}
