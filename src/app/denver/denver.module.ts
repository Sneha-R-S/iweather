import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DenverPageRoutingModule } from './denver-routing.module';

import { DenverPage } from './denver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DenverPageRoutingModule
  ],
  declarations: [DenverPage]
})
export class DenverPageModule {}
