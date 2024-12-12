import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudianteslistPage } from './estudianteslist.page';

describe('EstudianteslistPage', () => {
  let component: EstudianteslistPage;
  let fixture: ComponentFixture<EstudianteslistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
