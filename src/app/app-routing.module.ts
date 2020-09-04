import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LogoutComponent } from './logout/logout.component';
import { ServicesComponent } from './services/services.component';
import { HomeimageComponent } from './homeimage/homeimage.component';
import { DabbaserviceComponent } from './dabbaservice/dabbaservice.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [{path:'signup',component:SignupComponent},

{path:'login',component:LoginComponent},

{path:'forgotpassword',component:ForgotpasswordComponent},

{path:'home',component:HomeComponent,children:[{path:'services',component:ServicesComponent},

{path:'homeimage',component:HomeimageComponent},{path:'dabbaservice',component:DabbaserviceComponent}]},

{path:'',redirectTo:'/login',pathMatch:'full'},

{path:'**',component:ErrorpageComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
