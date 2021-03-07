import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInView } from './loggedinview.component';

describe('LoggedinviewComponent', () => {
  let component: LoggedInView;
  let fixture: ComponentFixture<LoggedInView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
