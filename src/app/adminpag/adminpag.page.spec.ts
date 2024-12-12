import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminpagPage } from './adminpag.page';

describe('AdminpagPage', () => {
  let component: AdminpagPage;
  let fixture: ComponentFixture<AdminpagPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
