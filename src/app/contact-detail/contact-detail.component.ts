import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector:    'trm-contacts-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls:   ['./contact-detail.component.css']

})
export class ContactDetailComponent
{
  @Input() contact: Contact;

  @Output() edit: EventEmitter<any> = new EventEmitter<Contact>();
  @Output() back: EventEmitter<any> = new EventEmitter<void>();
}
