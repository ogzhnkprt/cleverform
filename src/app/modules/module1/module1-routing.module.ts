import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module1Component } from './module1.component';
import { LoginComponent } from './components/login.component';


export const module1Routes: Routes = [
    {
      path: '',
      component: Module1Component,
      children: [
        {
          path: '',
          component: LoginComponent
        }
      ]      
    }

];

@NgModule({
    imports: [RouterModule.forChild(module1Routes)],
    exports: [RouterModule]
})
export class Module1RoutingModule { }
