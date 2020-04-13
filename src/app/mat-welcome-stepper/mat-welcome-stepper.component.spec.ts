import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatWelcomeStepperComponent } from './mat-welcome-stepper.component';

describe('MatWelcomeStepperComponent', () => {
  let component: MatWelcomeStepperComponent;
  let fixture: ComponentFixture<MatWelcomeStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatWelcomeStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatWelcomeStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
