import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MglTimelineEntrySideComponent } from './timeline-entry-side.component';

describe('TimelineEntrySideComponent', () => {
  let component: MglTimelineEntrySideComponent;
  let fixture: ComponentFixture<MglTimelineEntrySideComponent>;

  beforeEach(async(() => {
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
