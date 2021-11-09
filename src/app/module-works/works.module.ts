import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksPageComponent } from './components/works-page/works-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: WorksPageComponent }
];

@NgModule({
  declarations: [
    WorksPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WorksModule { }
