import {
  Inject,
  Injectable
} from '@angular/core';
import { Contact } from './models/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {
  catchError,
  debounceTime,
  delay,
  distinctUntilChanged,
  map,
  merge,
  switchMap,
  takeUntil
} from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class ContactsService
{
  constructor(private http: HttpClient, @Inject('API_ENDPOINT') private API_ENDPOINT)
  {

  }

  getContacts(): Observable<Array<Contact>>
  {
    return this.http.get<any>(this.API_ENDPOINT + 'contacts').pipe(
      map((res) =>
      {
        return res.items;
      })
    );
  }

  getContact(id: string): Observable<Contact>
  {
    return this.http.get<any>(this.API_ENDPOINT + 'contacts/' + id).pipe(
      map((res) =>
      {
        return res.item;
      }),
      delay(1000)
    );
  }

  updateContact(contact: Contact)
  {
    return this.http.put<any>(this.API_ENDPOINT + 'contacts/' + contact.id, contact).pipe();
  }

  search(terms: Observable<string>, debounceMs = 400): Observable<Array<Contact>>
  {
    return terms.pipe(
      debounceTime(debounceMs),
      distinctUntilChanged(),
      switchMap((x) => this.rawSearch(x).pipe(catchError((error) => of([])))),
      merge(this.getContacts().pipe(delay(3000), takeUntil(terms)))
    );
  }

  rawSearch(query: string)
  {
    return this.http.get<any>(this.API_ENDPOINT + 'search?text=' + query).pipe(
      map((res) => res.items)
    );
  }
}
