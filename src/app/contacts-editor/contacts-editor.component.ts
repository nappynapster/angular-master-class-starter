import {
  Component,
  OnInit
} from '@angular/core';
import { Contact } from '../models/contact';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs/internal/Observable';
import { EventBusService } from '../event-bus.service';
import { tap } from 'rxjs/operators';

@Component({
  selector:    'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html'
})
export class ContactsEditorComponent implements OnInit
{
  protected contact: Observable<Contact>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private eventBusService: EventBusService,
              private contactsService: ContactsService)
  {
  }

  ngOnInit()
  {
    let contactId = this.activatedRoute.snapshot.paramMap.get('id');

    this.contact = this.contactsService.getContact(contactId).pipe(
      tap((x) => this.eventBusService.emit('appTitleChange', 'Edit contact \'' + x.name + '\''))
    );

  }

  protected save(contact): void
  {
    this.contactsService.updateContact(contact).subscribe(() =>
    {
      this.goToContact(contact.id);
    });
  }

  protected cancel(contact): void
  {
    this.goToContact(contact.id);
  }

  private goToContact(contactId): void
  {
    this.router.navigate(['/contact',
                          contactId]);
  }


}
