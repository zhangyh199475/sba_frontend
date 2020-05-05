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
import { SearchTrainingDetailComponent } from './searchTraining-detail/searchTraining-detail.component';
import { CurrentTrainingsDetailComponent } from './currentTrainings-detail/currentTrainings-detail.component';
import { EditSkillsDetailComponent } from './editSkills-detail/editSkills-detail.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { TechnologiesDetailComponent } from './technologies-detail/technologies-detail.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  
  { path: 'home', component: CoreComponent, children: [
    { path: 'notifications', component: NotificationsComponent},
    { path: 'searchTraining', component: SearchTrainingComponent},
    { path: 'searchTraining-detail', component: SearchTrainingDetailComponent},
    { path: 'currentTraining', component: CurrentTrainingComponent},
    { path: 'currentTraining-detail', component: CurrentTrainingsDetailComponent},
    { path: 'completedTraining', component: CompletedTrainingComponent},
    { path: 'editSkills', component: EditSkillsComponent},
    { path: 'editSkills-detail', component: EditSkillsDetailComponent},
    { path: 'users', component: UsersComponent},
    { path: 'users-detail', component: UsersDetailComponent},
    { path: 'technologies', component: TechnologiesComponent},
    { path: 'technologies-detail', component: TechnologiesDetailComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
