import { MglTimelineEntryHeaderComponent } from './timeline-entry-header/timeline-entry-header.component';
import { MglTimelineEntryDotComponent } from './timeline-entry-dot/timeline-entry-dot.component';
import { MglTimelineEntryContentComponent } from './timeline-entry-content/timeline-entry-content.component';
import { MglTimelineEntrySideComponent } from './timeline-entry-side/timeline-entry-side.component';
import { MglTimelineEntryComponent } from './timeline-entry/timeline-entry.component';
import { MglTimelineComponent } from './timeline/timeline.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    MglTimelineComponent,
    MglTimelineEntryComponent,
    MglTimelineEntryHeaderComponent,
    MglTimelineEntrySideComponent,
    MglTimelineEntryContentComponent,
    MglTimelineEntryDotComponent
  ],
  exports: [
    MglTimelineComponent,
    MglTimelineEntryComponent,
    MglTimelineEntryHeaderComponent,
    MglTimelineEntrySideComponent,
    MglTimelineEntryContentComponent,
    MglTimelineEntryDotComponent
  ]
})
export class MglTimelineModule { }
