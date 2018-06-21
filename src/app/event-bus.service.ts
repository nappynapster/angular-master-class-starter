import { Subject } from 'rxjs/internal/Subject';
import { EventBusArgs } from './models/event-bus-args';
import { Observable } from 'rxjs/internal/Observable';
import {
  filter,
  map
} from 'rxjs/operators';

export class EventBusService
{
  private _messages$: Subject<EventBusArgs> = new Subject<EventBusArgs>();

  public emit(eventType: string, data: any)
  {
    this._messages$.next({
      type: eventType,
      data: data
    });
  }

  public observe(eventType: string): Observable<any>
  {
    return this._messages$.pipe(
      filter((args) => args.type === eventType),
      map((args) => args.data)
    );
  }

}
