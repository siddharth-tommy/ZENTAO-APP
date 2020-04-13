import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatStepperloginHistoryComponent } from './mat-stepperlogin-history.component';

describe('MatStepperloginHistoryComponent', () => {
  let component: MatStepperloginHistoryComponent;
  let fixture: ComponentFixture<MatStepperloginHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatStepperloginHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatStepperloginHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
