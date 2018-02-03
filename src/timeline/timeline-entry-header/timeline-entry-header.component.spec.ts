import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MglTimelineEntryHeaderComponent } from './timeline-entry-header.component';

describe('MglTimelineEntryHeaderComponent', () => {
  let component: MglTimelineEntryHeaderComponent;
  let fixture: ComponentFixture<MglTimelineEntryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MglTimelineEntryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MglTimelineEntryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
