import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { Module1Module } from './modules/module1/module1.module';

import { AppService } from './services/app.service';
import { AppTopic } from './services/app.topic';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    Module1Module   
  ], 
  providers: [AppTopic, 
              AppService/*,
              {provide: APP_BASE_HREF, useValue: '/cleverform'} */
             ],
  schemas:      [],
  bootstrap: [AppComponent]
})
export class AppModule { }
