import {
  ActivatedRouteSnapshot,
  Resolve
} from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ContactsResolver implements Resolve<Contact>
{
  constructor(private contactsService: ContactsService)
  {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Contact>
  {
    return this.contactsService.getContact(route.paramMap.get('id'));
  }
}
