import {
  Component,
  OnInit
} from '@angular/core';
import { ContactsService } from '../contacts.service';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/internal/Observable';
import { EventBusService } from '../event-bus.service';
import { tap } from 'rxjs/operators';

@Component({
  selector:    'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls:   ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit
{
  protected contact$: Observable<Contact>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private eventBusService: EventBusService,
              private contactsService: ContactsService)
  {
  }

  ngOnInit()
  {
    let contactId = this.activatedRoute.snapshot.paramMap.get('id');

    this.contact$ = this.contactsService.getContact(contactId).pipe(
      tap((x) => this.eventBusService.emit('appTitleChange', 'Contact details \'' + x.name + '\''))
    );
  }

  protected navigateToEditor()
  {
    this.router.navigate(['/']);
  }

  protected navigateToList()
  {
    this.router.navigate(['/']);
  }

}
