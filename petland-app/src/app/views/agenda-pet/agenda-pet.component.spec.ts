import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaPetComponent } from './agenda-pet.component';

describe('AgendaPetComponent', () => {
  let component: AgendaPetComponent;
  let fixture: ComponentFixture<AgendaPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
