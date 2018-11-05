import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(
    private afFirestore: AngularFirestore,
  ) { }

  getTodos(userId: string): Observable<Todo[]> {
    return this.afFirestore
      .collection('users')
      .doc(userId)
      .collection('todos')
      .snapshotChanges()
      .pipe(map(v => {
        const values = v.map(snap => {
          const data = snap.payload.doc.data() as Todo;
          const doc = snap.payload.doc.id;
          return { ...data, id: doc };
        });

        return values;
      }));
  }

  addTodo(todo: Todo) {
    return this.afFirestore.collection('users')
      .doc(todo.userId)
      .collection('todos').add(todo);
  }

  editTodo(todo: Todo) {
    return this.afFirestore.collection('users')
      .doc(todo.userId)
      .collection('todos')
      .doc(todo.id)
      .update(todo);
  }

  deleteTodo(todo: Todo) {
    return this.afFirestore.collection('users')
      .doc(todo.userId)
      .collection('todos')
      .doc(todo.id)
      .delete();
  }
}
