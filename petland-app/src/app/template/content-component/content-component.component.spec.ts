import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponentComponent } from './content-component.component';

describe('ContentComponentComponent', () => {
  let component: ContentComponentComponent;
  let fixture: ComponentFixture<ContentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
