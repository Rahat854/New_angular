import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {serverComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { WaringAlertComponent } from './waring-alert/waring-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import {FormsModule} from "@angular/forms";
import { UsernameComponent } from './username/username.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    WaringAlertComponent,
    SuccessAlertComponent,
    UsernameComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
