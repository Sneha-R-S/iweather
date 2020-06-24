import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewyorkPageRoutingModule } from './newyork-routing.module';

import { NewyorkPage } from './newyork.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewyorkPageRoutingModule
  ],
  declarations: [NewyorkPage]
})
export class NewyorkPageModule {}
