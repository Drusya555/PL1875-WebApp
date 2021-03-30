import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './shared/auth.guard';



const routes: Routes = [
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'login',component:LoginComponent}
  
  

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
