import { Component, HostBinding, Input } from '@angular/core';
import { animations } from './timeline-entry-side.animations';

@Component({
  selector: 'mgl-timeline-entry-side',
  templateUrl: './timeline-entry-side.component.html',
  styleUrls: ['./timeline-entry-side.component.scss'],
  animations: animations
})
export class MglTimelineEntrySideComponent {

  @Input()
  mobile: boolean = false;

  @Input()
  alternate: boolean = false;

  @HostBinding('@style')
  get style() {
    return this.mobile ? 'mobile' : (this.alternate ? 'alternate' : 'default');
  }

}
