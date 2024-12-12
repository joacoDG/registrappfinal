import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudianteslistaPage } from './estudianteslista.page';

const routes: Routes = [
  {
    path: '',
    component: EstudianteslistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudianteslistaPageRoutingModule {}
