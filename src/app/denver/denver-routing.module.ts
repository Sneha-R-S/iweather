import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DenverPage } from './denver.page';

const routes: Routes = [
  {
    path: '',
    component: DenverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DenverPageRoutingModule {}
