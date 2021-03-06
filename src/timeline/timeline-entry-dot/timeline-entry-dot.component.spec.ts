import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MglTimelineEntryDotComponent } from './timeline-entry-dot.component';

describe('TimelineEntryDotComponent', () => {
  let component: MglTimelineEntryDotComponent;
  let fixture: ComponentFixture<MglTimelineEntryDotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MglTimelineEntryDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MglTimelineEntryDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
