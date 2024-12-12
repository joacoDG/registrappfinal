import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.apiService.authenticateUser(this.email, this.password).subscribe(
      (response) => {
        if (response) {
          const { tipo } = response;
          localStorage.setItem('user', JSON.stringify(response)); // Guardar usuario en localStorage
          if (tipo === 'estudiante') {
            this.router.navigate(['/estudiantepag']);
          } else if (tipo === 'profesor') {
            this.router.navigate(['/profesorpag']);
          } else if (tipo === 'administrador') {
            this.router.navigate(['/adminpag']);
          }
        } else {
          this.errorMessage = 'Correo o contraseña incorrectos';
        }
      },
      (error) => {
        console.error(error);
        this.errorMessage = 'Error de servidor, inténtalo más tarde.';
      }
    );
  }

}
