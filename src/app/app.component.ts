import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LISTA_UTENTI } from './lista-utenti';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';

  users = LISTA_UTENTI;

  selectedUserId!: string;

  onSelectUserParent(user: User) {
    console.log('Hai selezionato lo user ' + user.id);
    this.selectedUserId = user.id;
  }
}
