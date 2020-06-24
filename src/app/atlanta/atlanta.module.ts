import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtlantaPageRoutingModule } from './atlanta-routing.module';

import { AtlantaPage } from './atlanta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtlantaPageRoutingModule
  ],
  declarations: [AtlantaPage]
})
export class AtlantaPageModule {}
