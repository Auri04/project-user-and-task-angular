import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // user= input.required<User>();
  @Input({ required: true }) user!: User;

  @Output() selectUser = new EventEmitter();

  onSelectUserChild(info: User) {
    this.selectUser.emit(info);
  }
}
