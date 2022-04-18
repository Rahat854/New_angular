import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassesComponent } from './ng-classes.component';

describe('NgClassesComponent', () => {
  let component: NgClassesComponent;
  let fixture: ComponentFixture<NgClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
