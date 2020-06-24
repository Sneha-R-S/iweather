import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtlantaPage } from './atlanta.page';

const routes: Routes = [
  {
    path: '',
    component: AtlantaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtlantaPageRoutingModule {}
