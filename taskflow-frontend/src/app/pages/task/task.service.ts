import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskDTO } from './task.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:8080/api/tasks';

  constructor(private http: HttpClient) {}

  createTask(taskDTO: TaskDTO): Observable<TaskDTO> {
    return this.http.post<TaskDTO>(`${this.baseUrl}`, taskDTO);
  }

  updateTask(taskId: number, taskDTO: TaskDTO): Observable<TaskDTO> {
    return this.http.put<TaskDTO>(`${this.baseUrl}/${taskId}`, taskDTO);
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${taskId}`);
  }

  getAllTasks(): Observable<TaskDTO[]> {
    return this.http.get<TaskDTO[]>(`${this.baseUrl}`);
  }

  getTaskById(taskId: number): Observable<TaskDTO> {
    return this.http.get<TaskDTO>(`${this.baseUrl}/${taskId}`);
  }

  makeTaskAsCompleted(taskId: number): Observable<TaskDTO> {
    return this.http.post<TaskDTO>(`${this.baseUrl}/${taskId}/complete`, {});
  }
}
