import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { isUserExistGuard } from "../services/guards/is-user-exist.guard";

const appRoutes: Routes = [
    // Static Routes
    { path: '', pathMatch: 'full', loadComponent: () => import('../pages/users-list.component').then(comp => comp.UsersListPage) },
    { path: 'page-not-found', loadComponent: () => import('../pages/not-found.component').then(comp => comp.NotFoundPageComponent) },
    
    // Dynamic Routes
    { path: 'users/:id', loadComponent: () => import('../pages/user-details.component').then(comp => comp.UserDetailsPage), canActivate: [isUserExistGuard] },
    { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }