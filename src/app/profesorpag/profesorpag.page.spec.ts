import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfesorpagPage } from './profesorpag.page';

describe('ProfesorpagPage', () => {
  let component: ProfesorpagPage;
  let fixture: ComponentFixture<ProfesorpagPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorpagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
