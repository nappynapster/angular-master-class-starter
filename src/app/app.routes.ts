import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';

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
        path:      'contact/:id/edit',
        component: ContactsEditorComponent
      },
    ]
  },
  {
    path:      'about',
    component: AboutComponent
  },
  {
    path:       '**',
    redirectTo: '/'
  }
];
