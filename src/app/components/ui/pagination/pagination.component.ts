import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { UiService } from 'src/app/services/ui.service';
import { MaterialModule } from 'src/app/modules/material.module';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule
  ]
})
export class PaginationComponent {
  @Input() itemsLength!: number;
  @Input() itemsPerPage!: number;
  activePage!: number;
  paginationNums!: number[];
  firstPaginationNums!: number[];
  lastPaginationNums!: number[];
  
  constructor(
    private uiService: UiService, 
    @Inject(PLATFORM_ID) private platformID: any
  ) {}

  ngOnInit() {
    this.paginationNums = Array.from(
      {length: (this.itemsLength / this.itemsPerPage) % 2 === 0 ? this.itemsLength / this.itemsPerPage : Math.ceil(this.itemsLength / this.itemsPerPage)},
      (_, num) => num + 1
    );
    this.firstPaginationNums = this.paginationNums.length < 6 ? this.paginationNums : [1, 2, 3];
    this.lastPaginationNums = this.paginationNums.length < 6 ? [] : this.paginationNums.slice(this.paginationNums.length - 3);
    if (isPlatformBrowser(this.platformID))
      this.activePage = localStorage.getItem('activePage') ? JSON.parse(<string>localStorage.getItem('activePage')) : 1;
  }

  paginateHandler(pageNum: number, numsType?: string) {
    if (isPlatformBrowser(this.platformID) && JSON.parse(<string>localStorage.getItem('activePage')) !== pageNum) {
      this.activePage = pageNum;
      localStorage.setItem('activePage', JSON.stringify(this.activePage));
      this.uiService.activePage$.next(this.activePage);
    }
    if (pageNum > 1 && pageNum < this.paginationNums.length - 3 && numsType === 'first-nums')
      this.firstPaginationNums = [this.activePage - 1, this.activePage, this.activePage + 1];
    }

  paginateDirectionHandler(dir: string) {
    if (dir === 'prev' && this.activePage > 1) {
      this.activePage--;
      if (this.activePage === this.lastPaginationNums[0] - 1)
        this.firstPaginationNums = [this.activePage - 2, this.activePage - 1, this.activePage];
    }
    else if ( (dir === 'next') && this.activePage < this.paginationNums.length) this.activePage++;
    this.paginateHandler(this.activePage, 'first-nums');
  }
}
