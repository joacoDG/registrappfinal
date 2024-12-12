import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorpagPageRoutingModule } from './profesorpag-routing.module';

import { ProfesorpagPage } from './profesorpag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorpagPageRoutingModule
  ],
  declarations: [ProfesorpagPage]
})
export class ProfesorpagPageModule {}
