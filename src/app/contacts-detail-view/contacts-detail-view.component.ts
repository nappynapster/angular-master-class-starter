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
import {
  switchMap,
  tap
} from 'rxjs/operators';

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
    //this.activatedRoute.params.subscribe((params: Params) =>
    //{
    //  this.contact$ = this.contactsService.getContact(params['id']).pipe(
    //    tap((x) => this.eventBusService.emit('appTitleChange', 'Contact details \'' + x.name + '\''))
    //  );
    //});

    //same as above
    this.contact$ = this.activatedRoute.params.pipe(
      switchMap((params) =>
      {
        return this.contactsService.getContact(params['id']).pipe(
          tap((x) => this.eventBusService.emit('appTitleChange', 'Contact details \'' + x.name + '\''))
        );
      })
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
