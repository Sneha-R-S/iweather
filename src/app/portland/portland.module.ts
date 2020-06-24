import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortlandPageRoutingModule } from './portland-routing.module';

import { PortlandPage } from './portland.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortlandPageRoutingModule
  ],
  declarations: [PortlandPage]
})
export class PortlandPageModule {}
