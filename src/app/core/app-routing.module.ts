import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { MainComponent } from '../main/main.component';
import { MainDetailComponent } from '../main-detail/main-detail.component';
import { SignInComponent } from '../sign-in/sign-in.component';


const routes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'home', component: AppComponent, children: [
    {path: 'main', component: MainComponent},
    {path: 'main-detail', component: MainDetailComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
