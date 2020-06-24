import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BostonPageRoutingModule } from './boston-routing.module';

import { BostonPage } from './boston.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BostonPageRoutingModule
  ],
  declarations: [BostonPage]
})
export class BostonPageModule {}
