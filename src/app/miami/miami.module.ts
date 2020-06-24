import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiamiPageRoutingModule } from './miami-routing.module';

import { MiamiPage } from './miami.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiamiPageRoutingModule
  ],
  declarations: [MiamiPage]
})
export class MiamiPageModule {}
