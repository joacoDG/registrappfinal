import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudianteslistPage } from './estudianteslist.page';

const routes: Routes = [
  {
    path: '',
    component: EstudianteslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudianteslistPageRoutingModule {}
