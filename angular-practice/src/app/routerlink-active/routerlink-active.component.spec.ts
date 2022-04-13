import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterlinkActiveComponent } from './routerlink-active.component';

describe('RouterlinkActiveComponent', () => {
  let component: RouterlinkActiveComponent;
  let fixture: ComponentFixture<RouterlinkActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterlinkActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterlinkActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
