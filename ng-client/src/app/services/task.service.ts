import { Injectable } from '@angular/core';
import { HttpReqService } from './http-req.service';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  constructor(private httpReqService: HttpReqService) { }

  createList(title: string) {
    //Send a web request to create a list
    return this.httpReqService.post('lists', { title });
  }

  getLists() {
    return this.httpReqService.get('lists');
  }

  updateList(id: string, title: string) {
    // We want to send a web request to update a list
    return this.httpReqService.patch(`lists/${id}`, { title });
  }

  updateTask(listId: string, taskId: string, title: string) {
    // We want to send a web request to update a list
    return this.httpReqService.patch(`lists/${listId}/tasks/${taskId}`, { title });
  }

  deleteTask(listId: string, taskId: string) {
    return this.httpReqService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  deleteList(id: string) {
    return this.httpReqService.delete(`lists/${id}`);
  }

  createTask(title: string, listId: string) {
    //Send a web request to create a task
    return this.httpReqService.post(`lists/${listId}/tasks`, { title });
  }

  getTasks(listId: string) {
    return this.httpReqService.get(`lists/${listId}/tasks`);
  }
  
  getFilteredTasks(listId: string, status: string) {
    return this.httpReqService.get(`lists/${listId}/tasks/${status}`);
  }
  
  complete(task: Task) {
    return this.httpReqService.patch(`lists/${task._listId}/tasks/${task._id}`, { completed: !task.completed });
  }


}
