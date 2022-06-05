import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreChildComponent } from './explore-child.component';

describe('ExploreChildComponent', () => {
  let component: ExploreChildComponent;
  let fixture: ComponentFixture<ExploreChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
