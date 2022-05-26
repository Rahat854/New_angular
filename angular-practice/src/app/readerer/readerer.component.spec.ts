import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadererComponent } from './readerer.component';

describe('ReadererComponent', () => {
  let component: ReadererComponent;
  let fixture: ComponentFixture<ReadererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
