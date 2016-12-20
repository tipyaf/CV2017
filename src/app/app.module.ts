import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {MaterializeModule} from "angular2-materialize";
import { HeaderComponent } from './header/header.component';
import {Angular2FontawesomeModule} from "angular2-fontawesome";
import { SocialsIconComponent } from './socials-icon/socials-icon.component';
import { NavComponent } from './nav/nav.component';
import { ContactsComponent } from './contacts/contacts.component';
import {Animations} from "./app.animations";

const appRoutes: Routes = [
  {
    path: 'accueil',
    component: HeaderComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialsIconComponent,
    NavComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    Angular2FontawesomeModule,
    AppRouting
  ],
  providers: [Animations],
  bootstrap: [AppComponent]
})
export class AppModule { }
