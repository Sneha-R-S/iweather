import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColombusPage } from './colombus.page';

const routes: Routes = [
  {
    path: '',
    component: ColombusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColombusPageRoutingModule {}
