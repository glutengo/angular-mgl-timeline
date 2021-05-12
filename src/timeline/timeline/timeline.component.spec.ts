import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MglTimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let component: MglTimelineComponent;
  let fixture: ComponentFixture<MglTimelineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MglTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MglTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
