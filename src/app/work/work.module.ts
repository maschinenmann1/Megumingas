import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WORK } from './components';
import { WorkRoutingModule } from './work-routing.module';


@NgModule({
  declarations: [
    ...WORK
  ],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
