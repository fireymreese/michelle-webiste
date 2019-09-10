import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { EducationComponent } from './education/education.component';
import { PassionsComponent } from './passions/passions.component';
import { PhotographyComponent } from './passions/photography/photography.component';

import { AppRoutingModule } from './app-routing.module';
import { ExperienceComponent } from 'src/app/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    ExperienceComponent,
    PassionsComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
