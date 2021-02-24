import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { PhoneComponent } from './phone/phone.component';
import { ContactTableComponent } from './contact-table/contact-table.component';


@NgModule({
  declarations: [ContactsComponent, PhoneComponent, ContactTableComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
