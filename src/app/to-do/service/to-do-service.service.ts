import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { ToDO } from '../interface/to-to.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  constructor(private fireStore: Firestore) { }

  addTask(task: ToDO){
    const taskRef = collection(this.fireStore, 'tasks');
    return addDoc(taskRef, task);
  }

  getTasks():Observable<ToDO[]>{
    const taskRef = collection(this.fireStore, 'tasks');
    return collectionData(taskRef, {idField: 'id'}) as Observable<ToDO[]>;
  }

  deleteTask(task: ToDO){
    const taskRef = doc(this.fireStore, `tasks/${task.id}`);
    return deleteDoc(taskRef);
  }

  updateAllTask(task: ToDO){
    const taskRef = doc(this.fireStore, `tasks/${task.id}`);
    return updateDoc(taskRef, { ...task });  
  }

  updateDoneTask(task: ToDO){
    const taskRef = doc(this.fireStore, `tasks/${task.id}`);
    return updateDoc(taskRef, { done: task.done });  
  }

}
