import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudianteslistaPageRoutingModule } from './estudianteslista-routing.module';

import { EstudianteslistaPage } from './estudianteslista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudianteslistaPageRoutingModule
  ],
  declarations: [EstudianteslistaPage]
})
export class EstudianteslistaPageModule {}
