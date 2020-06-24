import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TucsonPageRoutingModule } from './tucson-routing.module';

import { TucsonPage } from './tucson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TucsonPageRoutingModule
  ],
  declarations: [TucsonPage]
})
export class TucsonPageModule {}
