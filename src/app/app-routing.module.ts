import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { EducationComponent } from './education/education.component';
import { PassionsComponent } from './passions/passions.component';
import { PhotographyComponent } from './passions/photography/photography.component';
import { ExperienceComponent } from 'src/app/experience/experience.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'education', component: EducationComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'passions', component: PassionsComponent },
    { path: 'photography', component: PhotographyComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
