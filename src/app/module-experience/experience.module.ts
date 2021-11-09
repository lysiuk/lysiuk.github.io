import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ExperiencePageComponent }
];

@NgModule({
  declarations: [
    ExperiencePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExperienceModule { }
