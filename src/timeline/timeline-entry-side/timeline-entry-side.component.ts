import { Component, Input, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mgl-timeline-entry-side',
  templateUrl: './timeline-entry-side.component.html',
  styleUrls: ['./timeline-entry-side.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MglTimelineEntrySideComponent {

  set alternate(value) {
    this.elementRef.nativeElement.classList.toggle('alternate', value);
  }

  set mobile(value) {
    this.elementRef.nativeElement.classList.toggle('mobile', value);
  }
  
  constructor(private elementRef: ElementRef) { }

}
