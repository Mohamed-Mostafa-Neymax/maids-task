import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MaterialModule } from 'src/app/modules/material.module';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [
    MaterialModule
  ]
})
export class ButtonComponent {
  @Input() classes!: string;
  @Input() btnText!: string;
  @Input() to!: string;
  @Input() buttonType!: string;

  constructor(
    private router: Router
  ) {}

  submitHandler() {
    this.router.navigate([this.to]);
  }
}
