import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingChildComponent } from './gaming-child.component';

describe('GamingChildComponent', () => {
  let component: GamingChildComponent;
  let fixture: ComponentFixture<GamingChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
