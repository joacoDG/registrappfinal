import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      
    }),
  };

  constructor(private http: HttpClient) { }

  // CRUD Estudiantes
  getEstudiantes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/estudiantes`, {headers: this.httpOptions.headers});
  }

  getEstudianteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/estudiantes/${id}`);
  }

  createEstudiante(estudiante: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/estudiantes`, estudiante, this.httpOptions);
  }

  updateEstudiante(id: number, estudiante: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/estudiantes/${id}`, estudiante, this.httpOptions);
  }

  deleteEstudiante(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/estudiantes/${id}`, this.httpOptions);
  }

  // CRUD Profesores
  getProfesor(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/profesores`, {headers: this.httpOptions.headers});
  }

  getProfesorById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profesores/${id}`);
  }

  createProfesor(profesor: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/profesores`, profesor, this.httpOptions);
  }

  updateProfesor(id: number, profesor: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/profesores/${id}`, profesor, this.httpOptions);
  }

  deleteProfesor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/profesores/${id}`, this.httpOptions);
  }



   // Autenticación de usuarios
   authenticateUser(email: string, password: string): Observable<any> {
    console.log('Iniciando autenticación...');
    return this.http.get<any[]>(`${this.apiUrl}/estudiantes`).pipe(
      switchMap((estudiantes) => {
        const estudiante = estudiantes.find(
          (e) => e.correo === email && e.contrasena === password
        );
        if (estudiante) {
          console.log('Autenticado como estudiante:', estudiante);
          return of({ tipo: 'estudiante', data: estudiante });
        }
        return this.http.get<any[]>(`${this.apiUrl}/profesores`).pipe(
          switchMap((profesores) => {
            const profesor = profesores.find(
              (p) => p.correo === email && p.contrasena === password
            );
            if (profesor) {
              console.log('Autenticado como profesor:', profesor);
              return of({ tipo: 'profesor', data: profesor });
            }
            return this.http.get<any[]>(`${this.apiUrl}/administradores`).pipe(
              map((admins) => {
                const admin = admins.find(
                  (a) => a.correo === email && a.contrasena === password
                );
                if (admin) {
                  console.log('Autenticado como administrador:', admin);
                  return { tipo: 'administrador', data: admin };
                }
                console.log('Usuario no encontrado');
                return null;
              })
            );
          })
        );
      })
    );
  }
  


}
