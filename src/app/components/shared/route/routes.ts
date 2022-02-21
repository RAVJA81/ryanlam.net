import { Routes } from '@angular/router';

export const contentRoutes: Routes = [
    {
        path: 'index',
        loadChildren: () => import('./../../index/index.module').then(m => m.IndexModule)
    },
    {
        path: 'gallery',
        loadChildren: () => import('./../../gallery/gallery.module').then(m => m.GalleryModule)
    }
];