import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsMaterialModule } from './contacts-material.module';

import { ContactsAppComponent } from './app.component';
import { ContactsService } from './contacts.service';
import { RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { APP_ROUTES } from './app.routes';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HttpClientModule } from '@angular/common/http';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';


@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactDetailComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent,
    TabsComponent,
    TabComponent
  ],
  imports:      [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule
  ],
  providers:    [
    ContactsService,
    {
      provide:  'API_ENDPOINT',
      useValue: 'http://localhost:4201/api/'
    }
  ],
  bootstrap:    [ContactsAppComponent]
})
export class ContactsModule
{

}
