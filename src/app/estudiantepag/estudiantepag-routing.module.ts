import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudiantepagPage } from './estudiantepag.page';

const routes: Routes = [
  {
    path: '',
    component: EstudiantepagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudiantepagPageRoutingModule {}
