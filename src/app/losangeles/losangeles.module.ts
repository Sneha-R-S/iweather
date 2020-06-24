import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LosangelesPageRoutingModule } from './losangeles-routing.module';

import { LosangelesPage } from './losangeles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LosangelesPageRoutingModule
  ],
  declarations: [LosangelesPage]
})
export class LosangelesPageModule {}
