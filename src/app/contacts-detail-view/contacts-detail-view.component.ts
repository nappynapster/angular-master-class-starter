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
              private contactsService: ContactsService)
  {
  }

  ngOnInit()
  {
    let contactId = this.activatedRoute.snapshot.paramMap.get('id');

    this.contact$ = this.contactsService.getContact(contactId);
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
