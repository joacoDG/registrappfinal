import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-adminpag',
  templateUrl: './adminpag.page.html',
  styleUrls: ['./adminpag.page.scss'],
})
export class AdminpagPage implements OnInit {
  estudiantes: any[] = [];
  nuevoEstudiante = {
    nombre: '',
    correo: '',
    contrasena: '',
    telefono: '',
    edad: null,
    asignaturas: [],
  };

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.obtenerEstudiantes();
  }
  est() {
    this.router.navigate(['estudiantelist']);
  }

  prof() {
    this.router.navigate(['/admin/profesorlista']);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  obtenerEstudiantes() {
    this.apiService.getEstudiantes().subscribe((data) => {
      this.estudiantes = data;
    });
  }

  crearEstudiante() {
    this.apiService.createEstudiante(this.nuevoEstudiante).subscribe(() => {
      this.obtenerEstudiantes();
      this.nuevoEstudiante = {
        nombre: '',
        correo: '',
        contrasena: '',
        telefono: '',
        edad: null,
        asignaturas: [],
      };
    });
  }

  editarEstudiante(estudiante: any) {
    this.apiService.updateEstudiante(estudiante.id, estudiante).subscribe(() => {
      this.obtenerEstudiantes();
    });
  }

  eliminarEstudiante(id: number) {
    this.apiService.deleteEstudiante(id).subscribe(() => {
      this.obtenerEstudiantes();
    });
  }

}
