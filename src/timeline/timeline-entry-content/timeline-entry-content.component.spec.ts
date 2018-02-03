import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MglTimelineEntryContentComponent } from './timeline-entry-content.component';

describe('TimelineEntryContentComponent', () => {
  let component: MglTimelineEntryContentComponent;
  let fixture: ComponentFixture<MglTimelineEntryContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MglTimelineEntryContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MglTimelineEntryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
