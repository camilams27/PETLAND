import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgenciaComponent } from './urgencia.component';

describe('UrgenciaComponent', () => {
  let component: UrgenciaComponent;
  let fixture: ComponentFixture<UrgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
