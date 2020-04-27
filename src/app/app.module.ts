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

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      LoginComponent,
      CoreComponent,
      UsersComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
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
