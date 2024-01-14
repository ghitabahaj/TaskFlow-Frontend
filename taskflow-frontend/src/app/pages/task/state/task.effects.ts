import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, mergeMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from '../task.service';
import { getAllTasks, getAllTasksSuccess } from './task.actions';

@Injectable({
  providedIn: 'root'
})
export class TaskEffects {
    constructor(private action$: Actions, private serviceTask : TaskService ){}
    loadTasks$= createEffect(()=>{
        return this.action$.pipe(
            ofType(getAllTasks),
            mergeMap(()=> this.serviceTask.getAllTasks().pipe( map(tasks => getAllTasksSuccess({tasks}) )))
        )
    })
}