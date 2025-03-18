import { Component, OnInit, Input } from '@angular/core';
import { ToDO } from '../../interface/to-to.interface';
import { ToDoServiceService } from '../../service/to-do-service.service';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.scss'],
  standalone: false
})
export class ToDoTaskComponent  implements OnInit {

  constructor(private ToDoService: ToDoServiceService) { }

  @Input() task!: ToDO;
  isEditing = false;
  editableTask!: ToDO;

  ngOnInit() {
    this.editableTask = { ...this.task }; 
  }

  toggleEdit() {
    if (this.isEditing) {
      this.updateTask(); 
    }
    this.isEditing = !this.isEditing;
  }

  toggleTaskStatus(event: any) {
    this.task.done = event.detail.checked;
    this.updateDoneTask();
  }

  async deleteTask(task: ToDO) {
    const response = await this.ToDoService.deleteTask(task);
    console.log(response);
  }
  
  async updateTask() {
    await this.ToDoService.updateAllTask(this.editableTask);
    this.task = { ...this.editableTask }; 
  }

  async updateDoneTask() {
    const response = await this.ToDoService.updateDoneTask(this.task);
  }

}
