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
import { BrowserAnimationModuleComponent } from './browser-animation-module/browser-animation-module.component';
import { RouterlinkActiveComponent } from './routerlink-active/routerlink-active.component';
import { RouterlinkComponent } from './routerlink/routerlink.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgStylesComponent } from './ng-styles/ng-styles.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgClassesComponent } from './ng-classes/ng-classes.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { SkipSelfComponent } from './skip-self/skip-self.component';
import { SelfComponent } from './self/self.component';
import { PipeComponent } from './pipe/pipe.component';
import { OptionalComponent } from './optional/optional.component';
import { NgModuleComponent } from './ng-module/ng-module.component';
import { OutputComponent } from './output/output.component';
import { InputComponent } from './input/input.component';
import { InjectableComponent } from './injectable/injectable.component';
import { InjectComponent } from './inject/inject.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { HostBindingComponent } from './host-binding/host-binding.component';
import { HostComponent } from './host/host.component';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    WaringAlertComponent,
    SuccessAlertComponent,
    UsernameComponent,
    DisplayComponent,
    BrowserAnimationModuleComponent,
    RouterlinkActiveComponent,
    RouterlinkComponent,
    NgTemplateOutletComponent,
    NgStyleComponent,
    NgStylesComponent,
    NgClassComponent,
    NgClassesComponent,
    ViewChildComponent,
    SkipSelfComponent,
    SelfComponent,
    PipeComponent,
    OptionalComponent,
    NgModuleComponent,
    OutputComponent,
    InputComponent,
    InjectableComponent,
    InjectComponent,
    HostListenerComponent,
    HostBindingComponent,
    HostComponent,
    DirectiveComponent
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
