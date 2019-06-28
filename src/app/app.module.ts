import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
// import { EducationComponent } from './education';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  // {path: 'education', component: EducationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // EducationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HomeComponent,
    // EducationComponent
  ]
})
export class AppModule { }
