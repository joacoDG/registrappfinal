import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorpagPage } from './profesorpag.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorpagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorpagPageRoutingModule {}
