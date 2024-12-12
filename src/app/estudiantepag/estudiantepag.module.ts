import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudiantepagPageRoutingModule } from './estudiantepag-routing.module';

import { EstudiantepagPage } from './estudiantepag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudiantepagPageRoutingModule
  ],
  declarations: [EstudiantepagPage]
})
export class EstudiantepagPageModule {}
