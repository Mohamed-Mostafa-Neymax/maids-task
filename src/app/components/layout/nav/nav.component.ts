import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { UiService } from 'src/app/services/ui.service';
import { MaterialModule } from 'src/app/modules/material.module';
import { NavLinksComponent } from './nav-links/nav-links.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [
    MaterialModule,
    NavLinksComponent,
    RouterModule
  ]
})

export class NavComponent {

  constructor(
    private uiService: UiService,
    private router: Router
  ) {}

  searchHandler(inputEvent: any) {
    if (inputEvent.target.value.length > 0) {
      this.uiService.searchedID$.next(+inputEvent.target.value);
      this.router.navigate(['/']);
    }
    else
      this.uiService.searchedID$.next(null);
  }
}
