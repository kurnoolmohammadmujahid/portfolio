import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardsAchivementsComponent } from './awards-achivements.component';

const routes: Routes = [
  {
    path: '',
    component: AwardsAchivementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwardsAchivementsRoutingModule { }
