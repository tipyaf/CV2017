import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {AboutComponent} from "./about/about.component";
/**
 * Created by yannickbenchimol on 20/12/2016.
 */
export const appRoutes: Routes = [
  {
    path: 'accueil',
    component: HeaderComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  { path: '**', component: HeaderComponent }
];
export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: true
});
