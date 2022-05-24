import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingCardComponent } from './gaming-card.component';

describe('GamingCardComponent', () => {
  let component: GamingCardComponent;
  let fixture: ComponentFixture<GamingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
