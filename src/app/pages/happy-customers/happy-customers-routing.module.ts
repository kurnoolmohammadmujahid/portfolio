import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HappyCustomersComponent } from './happy-customers.component';

const routes: Routes = [
  {
    path: '',
    component: HappyCustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HappyCustomersRoutingModule { }
