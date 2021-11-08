import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSuiviComponent } from './gestion-suivi.component';

describe('GestionSuiviComponent', () => {
  let component: GestionSuiviComponent;
  let fixture: ComponentFixture<GestionSuiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionSuiviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
