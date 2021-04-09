import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile-summary/profile-summary.module').then(mod => mod.ProfileSummaryModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('./pages/work-experience/work-experience.module').then(mod => mod.WorkExperienceModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./pages/software-skills/software-skills.module').then(mod => mod.SoftwareSkillsModule)
  },
  {
    path: 'education',
    loadChildren: () => import('./pages/educational-qualification/educational-qualification.module').then(mod => mod.EducationalQualificationModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.module').then(mod => mod.ProjectsModule)
  },
  {
    path: 'achievements',
    loadChildren: () => import('./pages/awards-achivements/awards-achivements.module').then(mod => mod.AwardsAchivementsModule)
  },
  {
    path: 'personal-details',
    loadChildren: () => import('./pages/personal-details/personal-details.module').then(mod => mod.PersonalDetailsModule)
  },
  {
    path: 'happy-clients',
    loadChildren: () => import('./pages/happy-customers/happy-customers.module').then(mod => mod.HappyCustomersModule)
  },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: '**', redirectTo: '/profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
