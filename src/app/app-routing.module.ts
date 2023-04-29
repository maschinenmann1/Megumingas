import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeropageComponent, P404Component } from './routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: HeropageComponent
  },
  {
    path:'blog',
    loadChildren: () => import('./blog/blog.module').then(m=>m.BlogModule),
  },
  {
    path: 'about-me',
    loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule),
  },
  {
    path:'works',
    loadChildren: () => import('./work/work.module').then(m=>m.WorkModule),
  },
  {
    path:'contact',
    loadChildren: () => import('./contact/contact.module').then(m=>m.ContactModule),
  },
  {
    path: '**',
    component: P404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
