import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortlandPage } from './portland.page';

const routes: Routes = [
  {
    path: '',
    component: PortlandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortlandPageRoutingModule {}
