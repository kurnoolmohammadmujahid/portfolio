import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareSkillsComponent } from './software-skills.component';

const routes: Routes = [
  {
    path: '',
    component: SoftwareSkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareSkillsRoutingModule { }
