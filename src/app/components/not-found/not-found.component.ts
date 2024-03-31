import { Component } from '@angular/core';

import { TextComponent } from '../ui/text/text.component';
import { TitleSectionComponent } from '../ui/title-section/title-section.component';
import { ButtonComponent } from '../ui/button/button.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  standalone: true,
  imports: [
    TextComponent,
    TitleSectionComponent,
    ButtonComponent
  ]
})
export class NotFoundComponent {

}
