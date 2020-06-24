import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RayleighPageRoutingModule } from './rayleigh-routing.module';

import { RayleighPage } from './rayleigh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RayleighPageRoutingModule
  ],
  declarations: [RayleighPage]
})
export class RayleighPageModule {}
