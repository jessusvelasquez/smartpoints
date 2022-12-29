import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetprizesComponent } from './getprizes.component';

describe('GetprizesComponent', () => {
  let component: GetprizesComponent;
  let fixture: ComponentFixture<GetprizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetprizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetprizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
