import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a login al inicio
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'estudiantepag',
    loadChildren: () => import('./estudiantepag/estudiantepag.module').then( m => m.EstudiantepagPageModule),
    canActivate: [AuthGuard],
    data: { roles: ['estudiante'] }, // Solo estudiantes pueden acceder
  },
  {
    path: 'profesorpag',
    loadChildren: () => import('./profesorpag/profesorpag.module').then( m => m.ProfesorpagPageModule),
    canActivate: [AuthGuard],
    data: { roles: ['profesor'] }, // Solo profesores pueden acceder
  },
  {
    path: 'adminpag',
    loadChildren: () => import('./adminpag/adminpag.module').then( m => m.AdminpagPageModule),
    canActivate: [AuthGuard],
    data: { roles: ['administrador'] }, // Solo administradores pueden acceder
  },
  {
    path: 'estudianteslist',
    loadChildren: () => import('./estudianteslist/estudianteslist.module').then( m => m.EstudianteslistPageModule),
    
  },
  {
    path: 'profesoreslist',
    loadChildren: () => import('./profesoreslist/profesoreslist.module').then( m => m.ProfesoreslistPageModule),
    
  },
  {
    path: 'estudianteslista',
    loadChildren: () => import('./admin/estudianteslista/estudianteslista.module').then( m => m.EstudianteslistaPageModule),
    
  },
  {
    path: 'profesoreslista',
    loadChildren: () => import('./admin/profesoreslista/profesoreslista.module').then( m => m.ProfesoreslistaPageModule),
    
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
