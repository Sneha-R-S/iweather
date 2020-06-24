import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LouisvillePageRoutingModule } from './louisville-routing.module';

import { LouisvillePage } from './louisville.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LouisvillePageRoutingModule
  ],
  declarations: [LouisvillePage]
})
export class LouisvillePageModule {}
