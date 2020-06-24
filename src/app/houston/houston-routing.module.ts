import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoustonPage } from './houston.page';

const routes: Routes = [
  {
    path: '',
    component: HoustonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoustonPageRoutingModule {}
