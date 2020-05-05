import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core/core.component';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationsComponent } from './notifications/notifications.component';
import { SearchTrainingComponent } from './searchTraining/searchTraining.component';
import { CurrentTrainingComponent } from './currentTraining/currentTraining.component';
import { CompletedTrainingComponent } from './completedTraining/completedTraining.component';
import { EditSkillsComponent } from './editSkills/editSkills.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { CurrentTrainingsDetailComponent } from './currentTrainings-detail/currentTrainings-detail.component';
import { TechnologiesDetailComponent } from './technologies-detail/technologies-detail.component';
import { MatTableModule } from '@angular/material/table';
import { EditSkillsDetailComponent } from './editSkills-detail/editSkills-detail.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      LoginComponent,
      CoreComponent,
      UsersComponent,
      NotificationsComponent,
      SearchTrainingComponent,
      CurrentTrainingComponent,
      CompletedTrainingComponent,
      EditSkillsComponent,
      TechnologiesComponent,
      UsersDetailComponent,
      CurrentTrainingsDetailComponent,
      TechnologiesDetailComponent,
      EditSkillsDetailComponent
   ],
   imports: [
      BrowserAnimationsModule,
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      MatSidenavModule,
      MatTableModule
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
