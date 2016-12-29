import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {MaterializeModule} from "angular2-materialize";
import { HeaderComponent } from './header/header.component';
import {Angular2FontawesomeModule} from "angular2-fontawesome";
import { SocialsIconComponent } from './socials-icon/socials-icon.component';
import { NavComponent } from './nav/nav.component';
import { ContactsComponent } from './contacts/contacts.component';
import {Animations} from "./app.animations";
import { AboutComponent } from './about/about.component';
import {AppRouting} from "./app.routes";
import {DataService} from "./data.service";
// import {DataService} from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialsIconComponent,
    NavComponent,
    ContactsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    Angular2FontawesomeModule,
    JsonpModule,
    AppRouting
  ],
  providers: [
    Animations,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
