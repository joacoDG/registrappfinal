import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profesorpag',
  templateUrl: './profesorpag.page.html',
  styleUrls: ['./profesorpag.page.scss'],
})
export class ProfesorpagPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
