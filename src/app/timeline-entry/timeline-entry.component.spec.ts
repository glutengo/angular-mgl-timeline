import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MglTimelineEntryComponent } from './timeline-entry.component';

describe('MglTimelineEntryComponent', () => {
  let component: MglTimelineEntryComponent;
  let fixture: ComponentFixture<MglTimelineEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MglTimelineEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MglTimelineEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
