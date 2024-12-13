import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { User } from '../user/user.model';
import { LISTA_TASK } from './lista-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks = LISTA_TASK;

  @Input({ required: true }) userId!: string;
}
