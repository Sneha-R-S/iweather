import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RayleighPage } from './rayleigh.page';

const routes: Routes = [
  {
    path: '',
    component: RayleighPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RayleighPageRoutingModule {}
