import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=> import('./pages/characters-page/characters-page.component').then(x=>x.CharactersPageComponent)
    },
    {
        path: 'details/:id',
        loadComponent: ()=>import('./pages/characterdetails-page/characterdetails-page.component').then(x=>x.CharacterdetailsPageComponent)
    },
    {
        path: 'about',
        loadComponent: ()=>import('./pages/about-page/about-page.component').then(x=>x.AboutPageComponent)
    }
];
