import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';


export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './modules/module1/module1.module#Module1Module'
    } 

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
