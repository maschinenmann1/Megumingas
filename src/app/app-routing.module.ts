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
    path:'main', 
    component: HeropageComponent
  }, 
  /*{
    path:'blog',
    loadChildren: () => import('./contact/contact.module').then(m=>m.ContactModule),
  },
  {
    path:'about-me',
    loadChildren: () => import('./contact/contact.module').then(m=>m.ContactModule),
  },
  {
    path:'work',
    loadChildren: () => import('./contact/contact.module').then(m=>m.ContactModule),
  },
  {
    path:'contact',
    loadChildren: () => import('./contact/contact.module').then(m=>m.ContactModule),
  },*/
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
