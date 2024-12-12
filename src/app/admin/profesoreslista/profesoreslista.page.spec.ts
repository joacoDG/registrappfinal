import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfesoreslistaPage } from './profesoreslista.page';

describe('ProfesoreslistaPage', () => {
  let component: ProfesoreslistaPage;
  let fixture: ComponentFixture<ProfesoreslistaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoreslistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
