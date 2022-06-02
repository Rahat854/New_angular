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
import { ContentChildrenComponent } from './content-children/content-children.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ComponentComponent } from './component/component.component';
import { RouterComponent } from './router/router.component';
import { ActivatedRouteSnapshotComponent } from './activated-route-snapshot/activated-route-snapshot.component';
import { ActivatedRouteComponent } from './activated-route/activated-route.component';
import { TitleComponent } from './title/title.component';
import { DomSanitizerComponent } from './dom-sanitizer/dom-sanitizer.component';
import { ValidatorsComponent } from './validators/validators.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { AbstractControlComponent } from './abstract-control/abstract-control.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { SanitizerComponent } from './sanitizer/sanitizer.component';
import { ReadererComponent } from './readerer/readerer.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { ComponentRefComponent } from './component-ref/component-ref.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { DecimalPipeComponent } from './decimal-pipe/decimal-pipe.component';

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
    DirectiveComponent,
    ContentChildrenComponent,
    ContentChildComponent,
    ComponentComponent,
    RouterComponent,
    ActivatedRouteSnapshotComponent,
    ActivatedRouteComponent,
    TitleComponent,
    DomSanitizerComponent,
    ValidatorsComponent,
    FormGroupComponent,
    FormControlComponent,
    FormBuilderComponent,
    FormArrayComponent,
    AbstractControlComponent,
    TemplateRefComponent,
    SanitizerComponent,
    ReadererComponent,
    EventEmitterComponent,
    ElementRefComponent,
    ComponentRefComponent,
    NgTemplateComponent,
    NgContentComponent,
    NgContainerComponent,
    DecimalPipeComponent
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
