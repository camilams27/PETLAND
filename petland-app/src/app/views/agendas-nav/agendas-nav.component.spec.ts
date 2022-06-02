import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendasNavComponent } from './agendas-nav.component';

describe('AgendasNavComponent', () => {
  let component: AgendasNavComponent;
  let fixture: ComponentFixture<AgendasNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendasNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendasNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
