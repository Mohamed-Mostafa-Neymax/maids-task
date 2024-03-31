import { Component } from '@angular/core';

// Components
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    FooterComponent,
    NavComponent
  ]
})
export class LayoutComponent {
  
}
