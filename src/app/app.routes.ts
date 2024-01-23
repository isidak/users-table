import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full'
}, {
    path: 'main-page',
    loadComponent: () => import('./core/components/main-page/main-page.component').then(m => m.MainPageComponent)
}
];
