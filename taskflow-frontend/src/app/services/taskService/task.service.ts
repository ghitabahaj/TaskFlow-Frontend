import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    const url = `${this.apiUrl}/tasks/all`;
    return this.http.get<Task[]>(url);
  }

  createTask(task: Task, userId: number, tagNames: string[]): Observable<Task> {
    const url = `${this.apiUrl}/tasks/create`;
    const body = {
      task: task,
      userId: userId,
      tagNames: tagNames
    };
    return this.http.post<Task>(url, body);
  }
}
