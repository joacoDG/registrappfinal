import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfesoreslistPage } from './profesoreslist.page';

describe('ProfesoreslistPage', () => {
  let component: ProfesoreslistPage;
  let fixture: ComponentFixture<ProfesoreslistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoreslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
