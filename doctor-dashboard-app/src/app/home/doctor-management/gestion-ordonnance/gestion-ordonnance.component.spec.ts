import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionOrdonnanceComponent } from './gestion-ordonnance.component';

describe('GestionOrdonnanceComponent', () => {
  let component: GestionOrdonnanceComponent;
  let fixture: ComponentFixture<GestionOrdonnanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionOrdonnanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionOrdonnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
