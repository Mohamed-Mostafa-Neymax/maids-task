import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { RequestsService } from '../requests.service';

export const isUserExistGuard: CanActivateFn = async (route, _state) => {
    const router = inject(Router);
    const requestsService = inject(RequestsService);
    try {
        const user = await requestsService.getUser(+route.params['id']).toPromise();
        if (user) 
            return true;
        else {
            router.navigate(['/page-not-found']);
            return false;
        }
    } catch (error) {
        router.navigate(['/page-not-found']);
        return false;
    }
};
