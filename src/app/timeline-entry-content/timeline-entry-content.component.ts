import { Component, HostBinding, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { styles, params } from './timeline-entry-content.styles';
import { animations } from './timeline-entry-content.animations';

@Component({
  selector: 'mgl-timeline-entry-content',
  templateUrl: './timeline-entry-content.component.html',
  styleUrls: ['./timeline-entry-content.component.scss'],
  animations: animations
})
export class MglTimelineEntryContentComponent {

  expanded: boolean = false;

  @HostBinding('@expand')
  get routeAnimation() {
    this.params.height_expanded = this.elementRef.nativeElement.scrollHeight + 'px';
    return {
      value: this.expanded,
      params: this.params
    }
  }

  public params = { ...params };

  @Output()
  public animationDone = new EventEmitter<any>();

  @HostListener('@expand.done', ['$event'])
  public onAnimationDone(event) {
    this.animationDone.emit(event);
  }

  constructor(private elementRef: ElementRef) { }
}
