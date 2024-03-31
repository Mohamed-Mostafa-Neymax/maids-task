import { Component } from '@angular/core';

import { NotFoundComponent } from '../components/not-found/not-found.component';

@Component({
  selector: 'app-not-found-page',
  template: '<app-not-found></app-not-found>',
  standalone: true,
  imports: [
    NotFoundComponent
  ]
})
export class NotFoundPageComponent {

}
