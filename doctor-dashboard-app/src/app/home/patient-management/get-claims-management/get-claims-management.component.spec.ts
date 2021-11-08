import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClaimsManagementComponent } from './get-claims-management.component';

describe('GetClaimsManagementComponent', () => {
  let component: GetClaimsManagementComponent;
  let fixture: ComponentFixture<GetClaimsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClaimsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClaimsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
