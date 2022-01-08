import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: async () => ((await import('./module-about/about.module')).AboutModule)
  },
  {
    path: 'experience',
    loadChildren: async () => ((await import('./module-experience/experience.module')).ExperienceModule)
  },
  {
    path: 'skills',
    loadChildren: async () => ((await import('./module-skills/skills.module')).SkillsModule)
  },
  // {
  //   path: 'works',
  //   loadChildren: async () => ((await import('./module-works/works.module')).WorksModule)
  // },
  {
    path: '**',
    loadChildren: async () => ((await import('./module-not-found/not-found.module')).NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
