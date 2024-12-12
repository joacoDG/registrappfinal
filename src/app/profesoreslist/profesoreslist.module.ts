import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesoreslistPageRoutingModule } from './profesoreslist-routing.module';

import { ProfesoreslistPage } from './profesoreslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesoreslistPageRoutingModule
  ],
  declarations: [ProfesoreslistPage]
})
export class ProfesoreslistPageModule {}
