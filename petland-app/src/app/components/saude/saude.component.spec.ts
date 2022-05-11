import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudeComponent } from './saude.component';

describe('SaudeComponent', () => {
  let component: SaudeComponent;
  let fixture: ComponentFixture<SaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
