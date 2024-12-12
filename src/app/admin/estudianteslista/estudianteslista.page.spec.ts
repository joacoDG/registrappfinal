import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudianteslistaPage } from './estudianteslista.page';

describe('EstudianteslistaPage', () => {
  let component: EstudianteslistaPage;
  let fixture: ComponentFixture<EstudianteslistaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteslistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
