import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudianteslistPageRoutingModule } from './estudianteslist-routing.module';

import { EstudianteslistPage } from './estudianteslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudianteslistPageRoutingModule
  ],
  declarations: [EstudianteslistPage]
})
export class EstudianteslistPageModule {}
