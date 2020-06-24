import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColombusPageRoutingModule } from './colombus-routing.module';

import { ColombusPage } from './colombus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColombusPageRoutingModule
  ],
  declarations: [ColombusPage]
})
export class ColombusPageModule {}
