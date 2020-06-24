import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BostonPage } from './boston.page';

const routes: Routes = [
  {
    path: '',
    component: BostonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BostonPageRoutingModule {}
