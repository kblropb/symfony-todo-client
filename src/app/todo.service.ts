import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

import {HttpClient, HttpHeaders} from "@angular/common/http";

const API_URL = 'http://127.0.0.1:8000';
const options = {
  headers: new HttpHeaders({
    'X-AUTH-TOKEN': 'real'
  })
}

export interface Todo {
  id: Number,
  name: String,
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private http: HttpClient

  constructor(http: HttpClient) {
    this.http = http
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get(API_URL + '/todos', options)
      .pipe(
        map(res => res as Todo[] || [])
      )
  }
}
