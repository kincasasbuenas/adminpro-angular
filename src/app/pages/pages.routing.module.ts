import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Pages Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-setting/account-setting.component';


const pagesRoutes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'progress',component:ProgressComponent},
      {path:'graficas1',component:Graficas1Component},
      {path:'account-setting',component:AccountSettingsComponent},
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
