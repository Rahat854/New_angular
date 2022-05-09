import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRouteSnapshotComponent } from './activated-route-snapshot.component';

describe('ActivatedRouteSnapshotComponent', () => {
  let component: ActivatedRouteSnapshotComponent;
  let fixture: ComponentFixture<ActivatedRouteSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatedRouteSnapshotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedRouteSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
