import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiamiPage } from './miami.page';

const routes: Routes = [
  {
    path: '',
    component: MiamiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiamiPageRoutingModule {}
