import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminpagPageRoutingModule } from './adminpag-routing.module';

import { AdminpagPage } from './adminpag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminpagPageRoutingModule
  ],
  declarations: [AdminpagPage]
})
export class AdminpagPageModule {}
