import { Component } from '@angular/core';

import { UserDetailsComponent } from '../components/user-details/user-details.component';

@Component({
    selector: 'app-user-details-page',
    template: '<app-users-details></app-users-details>',
    standalone: true,
    imports: [
        UserDetailsComponent
    ]
})
export class UserDetailsPage {
    
}
