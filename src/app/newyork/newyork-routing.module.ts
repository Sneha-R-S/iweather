import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewyorkPage } from './newyork.page';

const routes: Routes = [
  {
    path: '',
    component: NewyorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewyorkPageRoutingModule {}
