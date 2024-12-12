import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpagPage } from './adminpag.page';

const routes: Routes = [
  {
    path: '',
    component: AdminpagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpagPageRoutingModule {}
