import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgPartComponent } from './prog-part.component';

describe('ProgPartComponent', () => {
  let component: ProgPartComponent;
  let fixture: ComponentFixture<ProgPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
