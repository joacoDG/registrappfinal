import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudiantepagPage } from './estudiantepag.page';

describe('EstudiantepagPage', () => {
  let component: EstudiantepagPage;
  let fixture: ComponentFixture<EstudiantepagPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantepagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
