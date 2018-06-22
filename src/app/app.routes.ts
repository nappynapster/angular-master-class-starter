import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { ContactsResolver } from './shared/contacts.resolver';

export const APP_ROUTES = [
  {
    path:      '',
    component: ContactsDashboardComponent,
    children:  [
      {
        path:       '',
        redirectTo: 'contact/0',
        pathMatch:  'full'
      },
      {
        path:      'contact/:id',
        component: ContactsDetailViewComponent
      },
      {
        path:          'contact/:id/edit',
        component:     ContactsEditorComponent,
        CanDeactivate: ['ConfirmNavigationGuard'],
        resolve:       {contact: ContactsResolver}
      },
    ]
  },
  {
    path:         'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path:       '**',
    redirectTo: '/'
  }
];
