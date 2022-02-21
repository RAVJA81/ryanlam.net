import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumComponent } from './components/gallery/album/album.component';
import { HomeComponent } from './components/index/home/home.component';
import { ContentWrapperComponent } from './components/shared/layout/content-wrapper/content-wrapper.component';
import { contentRoutes } from './components/shared/route/routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'index/home',
    pathMatch: 'full'
  },
  {
    path: '', 
    component: ContentWrapperComponent,
    children: contentRoutes
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

