import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesoreslistPage } from './profesoreslist.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesoreslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesoreslistPageRoutingModule {}
