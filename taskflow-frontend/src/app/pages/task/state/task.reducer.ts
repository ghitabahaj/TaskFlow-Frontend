import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as taskactions from './task.actions'; 
import { TaskDTO } from '../task.interfaces';


export interface TaskState {
  tasks: TaskDTO[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: true,
  error: null
};

const getTaskFeatureState = createFeatureSelector<TaskState>('tasks');
export const getAllTask = createSelector(
    getTaskFeatureState,
  state => {
    return state.tasks
  }
);
export const OnLoading = createSelector(
    getTaskFeatureState,
  state => {
    return state.loading
  }
);


export const taskReducer = createReducer(
  initialState,
  on(taskactions.getAllTasks, (state) => {
    return {
      ...state,
      loading: true,
      error: null
    };
  }),
  on(taskactions.getAllTasksSuccess, (state, { tasks }) => {
    return {
      ...state,
      tasks,
      loading: false,
      error: null
    };
  }),
  on(taskactions.getAllTasksFailure, (state, { error }) => {
    return {
      ...state,
      loading: false, 
      error : error
    };
  }),
  on(taskactions.createTask, (state, { taskDTO }) => {
    return {
      ...state,
      loading: true,
      error: null
    };
  }),
  on(taskactions.createTaskSuccess, (state,action) => {
    return {
      ...state,
      tasks: [...state.tasks, action.task], 
      loading: false,
      error: null
    };
  }),
  on(taskactions.createTaskFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error :action.error
    };
  })
);



