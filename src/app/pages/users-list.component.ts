import { Component } from '@angular/core';

import { UsersListComponent } from '../components/users-list/users-list.component';

@Component({
  selector: 'app-users-page',
  template: '<app-users-list></app-users-list>',
  standalone: true,
  imports: [
    UsersListComponent
  ]
})
export class UsersListPage {

}
