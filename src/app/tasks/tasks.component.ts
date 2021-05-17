import {Component, OnInit} from '@angular/core';
import {faCheck, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Task, TaskService} from "../task.service";
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {
  faTrash = faTrash;
  faCheck = faCheck;
  tasks: Task[];
  errorMessage: string;

  addTaskForm = this.formBuilder.group({
    name: ''
  });

  searchForm = this.formBuilder.group({
    name: ''
  });

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {
    this.tasks = [];
    this.errorMessage = "";
  }


  ngOnInit(): void {
    this.taskList();
  }

  taskList() {
    return this.taskService
      .taskList(1)
      .subscribe(
        tasks => this.tasks = tasks,
        error => this.errorMessage = <any>error
      );
  }

  done(task: Task) {
    return this.taskService
      .taskDone(1, task)
      .subscribe(
        updatedTask => {
          let currentTask = this.tasks.find(item => item.id === task.id);
          if (currentTask) {
            currentTask.is_done = true
          }
        },
        error => this.errorMessage = <any>error
      );
  }

  delete(task: Task) {
    return this.taskService
      .taskDelete(1, task)
      .subscribe(
        updatedTask => {
          const index = this.tasks.indexOf(task, 0);
          if (index > -1) {
            this.tasks.splice(index, 1);
          }
        },
        error => this.errorMessage = <any>error
      );
  }

  addTask() {
    return this.taskService
      .addTask(1, this.addTaskForm.value)
      .subscribe(
        task => {
          this.tasks.push(task);
          this.addTaskForm.reset();
        },
        error => this.errorMessage = <any>error
      );
  }

  search() {
    return this.taskService
      .search(this.searchForm.value)
      .subscribe(
        tasks => this.tasks = tasks,
        error => this.errorMessage = <any>error
      );
  }
}
