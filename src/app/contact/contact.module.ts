import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT } from './components';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [
    ...CONTACT
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
