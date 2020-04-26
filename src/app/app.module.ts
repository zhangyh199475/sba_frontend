import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './core/app/app.component';
import { MainComponent } from './main/main.component';
import { MainDetailComponent } from './main-detail/main-detail.component';

@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      MainDetailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
