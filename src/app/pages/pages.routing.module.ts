import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Pages Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      {path:'dashboard',component:DashboardComponent, data:{titulo:'Dashboard'}},
      {path:'progress',component:ProgressComponent, data:{titulo:'Progress'}},
      {path:'graficas1',component:Graficas1Component, data:{titulo:'Graficas'}},
      {path:'promesas',component:PromesasComponent, data:{titulo:'Promesas'}},
      {path:'rxjs',component:RxjsComponent, data:{titulo:'RxJs'}},
      {path:'account-setting',component:AccountSettingsComponent, data:{titulo:'Ajustes del Tema'}},
      {path:'',redirectTo:'/dashboard', pathMatch:'full'}
    ]
  }
];

// Se utiliza forChild por ser rutas hijas
/*@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }*/
export const PagesRoutingModule = RouterModule.forChild( pagesRoutes );
