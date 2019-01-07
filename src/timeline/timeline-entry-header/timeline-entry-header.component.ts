import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mgl-timeline-entry-header',
  templateUrl: './timeline-entry-header.component.html',
  styleUrls: ['./timeline-entry-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MglTimelineEntryHeaderComponent {
  
  expandEmitter = new EventEmitter<any>();

  toggle() {
    this.expandEmitter.emit("expandEvent");
  }
}
