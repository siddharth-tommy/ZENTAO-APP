import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStoriesTableComponent } from './my-stories-table.component';

describe('MyStoriesTableComponent', () => {
  let component: MyStoriesTableComponent;
  let fixture: ComponentFixture<MyStoriesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStoriesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStoriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
