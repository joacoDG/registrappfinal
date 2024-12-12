import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesoreslistaPage } from './profesoreslista.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesoreslistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesoreslistaPageRoutingModule {}
