import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './state/task.reducer';

const routes: Routes = [
  { path: '', component: TaskComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('tasks', taskReducer),
    RouterModule.forChild(routes)
  ]
})
export class TaskModule { }
