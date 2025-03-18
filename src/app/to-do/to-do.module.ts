import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoTaskComponent } from './components/to-do-task/to-do-task.component';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ToDoFormComponent, ToDoListComponent, ToDoTaskComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [ToDoFormComponent, ToDoListComponent, ToDoTaskComponent]
})  
export class ToDoModule { }
