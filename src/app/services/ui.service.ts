import { isPlatformBrowser } from "@angular/common";
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UiService {
    activePage$ = new BehaviorSubject<number>(
        isPlatformBrowser(this.platformID) && localStorage.getItem('activePage') ? JSON.parse(<string>localStorage.getItem('activePage')) : 1
    );
    searchedID$ = new BehaviorSubject<number | null>(null);

    constructor(@Inject(PLATFORM_ID) private platformID: any) { }
}