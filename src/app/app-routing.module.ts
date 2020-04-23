import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuardGuard } from './services/service.index';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {
      path: '',
      component: PagesComponent,
      canActivate: [ LoginGuardGuard ],
      loadChildren: ()=> PagesModule
      //loadChildren: "./pages/pages.module#PagesModule"
  },
  {path:'**',component:NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
