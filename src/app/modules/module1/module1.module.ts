import { NgModule } from '@angular/core';

import { Module1RoutingModule } from './module1-routing.module';
import { SharedModule } from '../shared/shared.module';

import { Module1Component } from './module1.component';

import { LoginComponent } from './components/login.component';
import { LoginFormCheckerDirective } from './components/login.form.directive';


@NgModule({
  declarations: [
    Module1Component,
    LoginComponent,
    LoginFormCheckerDirective
  ],
  imports: [ 
    Module1RoutingModule,
    SharedModule
  ],
  providers: []
})
export class Module1Module { }
