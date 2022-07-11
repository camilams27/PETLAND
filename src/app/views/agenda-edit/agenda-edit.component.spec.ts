import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaEditComponent } from './agenda-edit.component';

describe('AgendaEditComponent', () => {
  let component: AgendaEditComponent;
  let fixture: ComponentFixture<AgendaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
