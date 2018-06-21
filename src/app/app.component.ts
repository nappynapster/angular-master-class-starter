import {
  Component,
  OnInit
} from '@angular/core';
import { EventBusService } from './event-bus.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector:    'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit
{
  protected title = 'Angular Master Class';

  constructor(private eventBusService: EventBusService,
              private titleService: Title)
  {
  }

  ngOnInit()
  {
    this.eventBusService.observe('appTitleChange')
        .subscribe((title) =>
        {
          this.title = title;
          this.titleService.setTitle(title);
        });
  }

}
