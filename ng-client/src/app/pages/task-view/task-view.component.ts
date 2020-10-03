import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[];
  tasks: Task[];

  selectedListId: string;

  constructor(
    private taskService: TaskService, 
    private authService: AuthService,
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.listId) {
        this.selectedListId = params.listId;
        this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
          this.tasks = tasks;
        })
      } else {
        this.tasks = undefined;
      }
    });

    this.taskService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    });
  }

  //Toggles completed status of a task when clicked
  onTaskClick(task: Task) {
    this.taskService.complete(task).subscribe(() => {
      console.log('Completed succesfully!');
      task.completed = !task.completed;
    });
  }

  onCompleted(status: string) {
    // this.router.navigate(['/tasks', status], {relativeTo: this.route});
    // console.log('clicked');
    
    this.route.params.subscribe((params: Params) => {
      this.taskService.getFilteredTasks(params.listId, status).subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
    });
  }

  onDeleteListClick() {
    this.taskService.deleteList(this.selectedListId).subscribe((res: any) => {
      this.router.navigate(['/lists']);
      console.log(res);
    })
  }

  onDeleteTaskClick(id: string) {
    this.taskService.deleteTask(this.selectedListId, id).subscribe((res: any) => {
      this.tasks = this.tasks.filter(val => val._id !== id);
      console.log(res);
    })
  }

  onLogout() {
    this.authService.logout();
  }

 }
