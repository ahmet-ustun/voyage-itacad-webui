import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesChildComponent } from './species-child.component';

describe('SpeciesChildComponent', () => {
  let component: SpeciesChildComponent;
  let fixture: ComponentFixture<SpeciesChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeciesChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
