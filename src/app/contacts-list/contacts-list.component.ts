import {
  Component,
  OnInit
} from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/internal/Observable';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';

function log()
{
  return (stream) =>
  {
    console.log(stream);
  };
}

@Component({
  selector:    'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls:   ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit
{
  protected contacts: Observable<Array<Contact>>;

  //protected terms$ = new Subject<string>();
  searchField = new FormControl();

  private destroy$ = new Subject<string>();

  constructor(private contactsService: ContactsService)
  {
  }

  ngOnInit()
  {
    //this.contacts = this.contactsService.getContacts();

    //this.terms$.pipe(
    //  debounceTime(400),
    //  distinctUntilChanged()
    //).subscribe((item) =>
    //{
    //  this.search(item);
    //});

    //this.searchField.valueChanges.pipe(
    //  debounceTime(400),
    //  distinctUntilChanged()
    //).subscribe((item) =>
    //{
    //  this.search(item);
    //});

    //this.contacts = this.searchField.valueChanges.pipe(
    //  debounceTime(0),
    //  distinctUntilChanged(),
    //  switchMap((x) => this.search(x)),
    //  merge(this.contactsService.getContacts().pipe(delay(3000), takeUntil(this.searchField.valueChanges)))
    //);

    this.contacts = this.contactsService.search(this.searchField.valueChanges);
  }

  trackByContact(index: number, contact: Contact): number | string
  {
    return contact.id;
  }

  protected search(value: string)
  {
    //return this.contactsService.searchContact(value);
  }

}
