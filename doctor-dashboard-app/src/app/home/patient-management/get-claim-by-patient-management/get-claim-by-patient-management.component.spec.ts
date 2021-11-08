import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClaimByPatientManagementComponent } from './get-claim-by-patient-management.component';

describe('GetClaimByPatientManagementComponent', () => {
  let component: GetClaimByPatientManagementComponent;
  let fixture: ComponentFixture<GetClaimByPatientManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClaimByPatientManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClaimByPatientManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
