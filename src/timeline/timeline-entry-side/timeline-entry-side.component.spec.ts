import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MglTimelineEntrySideComponent } from './timeline-entry-side.component';

describe('TimelineEntrySideComponent', () => {
  let component: MglTimelineEntrySideComponent;
  let fixture: ComponentFixture<MglTimelineEntrySideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MglTimelineEntrySideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MglTimelineEntrySideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
