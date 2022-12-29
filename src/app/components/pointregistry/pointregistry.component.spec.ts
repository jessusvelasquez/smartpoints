import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointregistryComponent } from './pointregistry.component';

describe('PointregistryComponent', () => {
  let component: PointregistryComponent;
  let fixture: ComponentFixture<PointregistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointregistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointregistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
