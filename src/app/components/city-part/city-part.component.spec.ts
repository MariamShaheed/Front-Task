import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPartComponent } from './city-part.component';

describe('CityPartComponent', () => {
  let component: CityPartComponent;
  let fixture: ComponentFixture<CityPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
