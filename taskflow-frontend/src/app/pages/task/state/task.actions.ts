import { createAction, props } from '@ngrx/store';
import { TaskDTO } from '../task.interfaces';

export const getAllTasks = createAction(
  '[tasks] GetALL Task');

export const getAllTasksSuccess = createAction(
  '[tasks] GetALL Task Success',
  props<{ tasks: TaskDTO[] }>()
);

export const getAllTasksFailure = createAction(
  '[tasks] GetALL Task Failure',
  props<{ error: string }>()
);

export const createTask = createAction('[tasks] Create Task', props<{ taskDTO: TaskDTO }>());

export const createTaskSuccess = createAction(
    '[tasks] Create Task Success',
    props<{ task: TaskDTO }>()
);
  
export const createTaskFailure = createAction(
    '[tasks] Create Task Failure',
    props<{ error: string }>()
);