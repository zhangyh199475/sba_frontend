import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core/core.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SearchTrainingComponent } from './searchTraining/searchTraining.component';
import { CurrentTrainingComponent } from './currentTraining/currentTraining.component';
import { CompletedTrainingComponent } from './completedTraining/completedTraining.component';
import { EditSkillsComponent } from './editSkills/editSkills.component';
import { UsersComponent } from './users/users.component';
import { TechnologiesComponent } from './technologies/technologies.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  
  { path: 'home', component: CoreComponent, children: [
    { path: 'notifications', component: NotificationsComponent},
    { path: 'searchTraining', component: SearchTrainingComponent},
    { path: 'currentTraining', component: CurrentTrainingComponent},
    { path: 'completedTraining', component: CompletedTrainingComponent},
    { path: 'editSkills', component: EditSkillsComponent},
    { path: 'users', component: UsersComponent},
    { path: 'technologies', component: TechnologiesComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
