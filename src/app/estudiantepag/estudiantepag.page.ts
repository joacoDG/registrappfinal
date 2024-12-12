import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-estudiantepag',
  templateUrl: './estudiantepag.page.html',
  styleUrls: ['./estudiantepag.page.scss'],
})
export class EstudiantepagPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
