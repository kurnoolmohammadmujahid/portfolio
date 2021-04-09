import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationalQualificationComponent } from './educational-qualification.component';

const routes: Routes = [
  {
    path: '',
    component: EducationalQualificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationalQualificationRoutingModule { }
