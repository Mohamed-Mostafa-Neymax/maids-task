import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { debounceTime, mergeMap, of } from 'rxjs';

import { RequestsService } from 'src/app/services/requests.service';
import { UiService } from 'src/app/services/ui.service';
import { User } from 'src/app/models/users.model';
import { TitleSectionComponent } from '../ui/title-section/title-section.component';
import { LoadingComponent } from '../ui/loading/loading.component';
import { TextComponent } from '../ui/text/text.component';
import { PaginationComponent } from '../ui/pagination/pagination.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  standalone: true,
  imports: [
    TitleSectionComponent,
    LoadingComponent,
    RouterModule,
    TextComponent,
    PaginationComponent,
    CommonModule
  ]
})
export class UsersListComponent {
  users!: User[];
  activePage!: number;
  per_page!: number;
  total!: number;
  isLoading!: boolean;
  isSearching!: boolean;

  constructor(
    private requestsService: RequestsService,
    private uiService: UiService,
    @Inject(PLATFORM_ID) private platformID: any
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformID)) 
      this.activePage = localStorage.getItem('activePage') ? JSON.parse(<string>localStorage.getItem('activePage')) : 1;
    this.getSearchedUser();
  }

  trackByFn(_index: any, user: any) { return user.id; }

  getPaginatedUsers() {
    this.isLoading = true;
    this.uiService.activePage$
      .pipe( mergeMap(activePage => this.requestsService.getUsers(activePage)) )
      .subscribe(
        (res: any) => {
          this.users = res.data;
          this.per_page = res.per_page;
          this.total = res.total;
          this.isLoading = false;
        }
      );
  }

  getSearchedUser() {
    this.uiService.searchedID$
      .pipe(
        mergeMap((userID: any) => {
          this.isLoading = true;
          return userID ? this.requestsService.getUser(userID) : of(userID)
        }),
        debounceTime(2000)
      )
      .subscribe(
        (res: any) => {
          this.isLoading = false;
          if (res) {
            this.isSearching = true;
            this.users = [res.data];
          } else {
            this.isSearching = false;
            this.getPaginatedUsers();
          }
        }
      );
  }
}
