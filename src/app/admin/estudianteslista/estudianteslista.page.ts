import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-estudianteslista',
  templateUrl: './estudianteslista.page.html',
  styleUrls: ['./estudianteslista.page.scss'],
})
export class EstudianteslistaPage implements OnInit {
  estudiantes: any[] = [];
  nuevoEstudiante = {
    nombre: '',
    correo: '',
    contrasena: '',
    telefono: '',
    edad: null,
    asignaturas: [],
  };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.obtenerEstudiantes();
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
