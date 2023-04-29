import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ABOUT } from './components';
import { AboutMeRoutingModule } from './about-me-routing.module';


@NgModule({
  declarations: [
    ...ABOUT
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ]
})
export class AboutMeModule { }
