import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavLink } from 'src/app/models/layout.model';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class NavLinksComponent {
  @Input() classes!: string;
  navLinks: NavLink[] = [
    {
      id: 1,
      title: 'Users',
      path: '/'
    }
  ];

  trackByFn(_index: any, item: any) { return item.titleEn; }
}
