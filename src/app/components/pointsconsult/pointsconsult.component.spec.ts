import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsconsultComponent } from './pointsconsult.component';

describe('PointsconsultComponent', () => {
  let component: PointsconsultComponent;
  let fixture: ComponentFixture<PointsconsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsconsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsconsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
