import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoustonPageRoutingModule } from './houston-routing.module';

import { HoustonPage } from './houston.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoustonPageRoutingModule
  ],
  declarations: [HoustonPage]
})
export class HoustonPageModule {}
