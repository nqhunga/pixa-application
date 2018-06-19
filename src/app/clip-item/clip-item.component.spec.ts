import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipItemComponent } from './clip-item.component';

describe('ClipItemComponent', () => {
  let component: ClipItemComponent;
  let fixture: ComponentFixture<ClipItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
