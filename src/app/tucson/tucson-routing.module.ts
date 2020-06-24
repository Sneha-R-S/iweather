import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TucsonPage } from './tucson.page';

const routes: Routes = [
  {
    path: '',
    component: TucsonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TucsonPageRoutingModule {}
