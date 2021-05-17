import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

import {HttpClient, HttpHeaders} from "@angular/common/http";

const API_URL = 'http://127.0.0.1:8000';
const options = {
  headers: new HttpHeaders({
    'X-AUTH-TOKEN': 'api_token'
  })
}

export interface Task {
  id: Number,
  name: String,
  is_done: Boolean,
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private http: HttpClient

  constructor(http: HttpClient) {
    this.http = http
  }

  taskList(todoId: Number): Observable<Task[]> {
    return this.http.get(API_URL + '/todos/' + todoId + '/tasks', options)
      .pipe(
        map(res => res as Task[] || [])
      )
  }

  taskDone(todoId: Number, task: Task): Observable<Task> {
    return this.http.put(API_URL + '/todos/' + todoId + '/tasks/' + task.id + '/done', '', options)
      .pipe(
        map(res => res as Task || [])
      )
  }

  taskDelete(todoId: number, task: Task): Observable<Task> {
    return this.http.delete(API_URL + '/todos/' + todoId + '/tasks/' + task.id, options)
      .pipe(
        map(res => res as Task || [])
      )
  }

  addTask(todoId: number, body: any): Observable<Task> {
    return this.http.post(API_URL + '/todos/' + todoId + '/tasks', body, options)
      .pipe(
        map(res => res as Task || [])
      )
  }

  search(params: any): Observable<Task[]> {
    const searchParams = new URLSearchParams(params);
    return this.http.get(API_URL + '/search?' + searchParams, options)
      .pipe(
        map(res => res as Task[] || [])
      )
  }
}
