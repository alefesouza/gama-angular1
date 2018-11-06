import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  description: string;
  date: string;
  finished: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  URL = 'http://localhost:3000/todos';

  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todos');
  }
}
