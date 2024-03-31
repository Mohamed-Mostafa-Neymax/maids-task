import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, mergeMap } from 'rxjs';

import { User } from 'src/app/models/users.model';
import { RequestsService } from 'src/app/services/requests.service';
import { TitleSectionComponent } from '../ui/title-section/title-section.component';
import { ButtonComponent } from '../ui/button/button.component';
import { LoadingComponent } from '../ui/loading/loading.component';
import { TextComponent } from '../ui/text/text.component';

@Component({
  selector: 'app-users-details',
  templateUrl: './user-details.component.html',
  standalone: true,
  imports: [
    TitleSectionComponent,
    ButtonComponent,
    LoadingComponent,
    TextComponent,
    CommonModule
  ]
})
export class UserDetailsComponent {
  user!: User;
  support!: {url: string; text: string;}
  isLoading!: boolean;
  isError!: boolean;

  constructor(
    private requestsService: RequestsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.isLoading = true;
    this.route.params
    .pipe(
      mergeMap(params => this.requestsService.getUser(+params['id'])),
      debounceTime(2000)
    )
    .subscribe(
      (user: any) => {
        this.isLoading = false;
        this.user = user.data;
        this.support = user.support;
      }
    );
  }
}
