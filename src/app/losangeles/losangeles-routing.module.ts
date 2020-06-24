import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LosangelesPage } from './losangeles.page';

const routes: Routes = [
  {
    path: '',
    component: LosangelesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LosangelesPageRoutingModule {}
