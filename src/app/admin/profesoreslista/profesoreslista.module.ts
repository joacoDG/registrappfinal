import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesoreslistaPageRoutingModule } from './profesoreslista-routing.module';

import { ProfesoreslistaPage } from './profesoreslista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesoreslistaPageRoutingModule
  ],
  declarations: [ProfesoreslistaPage]
})
export class ProfesoreslistaPageModule {}
