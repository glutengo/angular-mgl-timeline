import { Component, Input, HostBinding, EventEmitter, Output, HostListener, AfterViewInit, ElementRef } from '@angular/core';
import { styles, params } from './timeline-entry-dot.styles';
import { animations } from './timeline-entry-dot.animations';

@Component({
  selector: 'mgl-timeline-entry-dot',
  templateUrl: './timeline-entry-dot.component.html',
  styleUrls: ['./timeline-entry-dot.component.scss'],
  animations: animations
})
export class MglTimelineEntryDotComponent implements AfterViewInit {
  private params = { ...params.default };

  @Input()
  @HostBinding('class')
  color = 'primary';

  private _size: number = parseInt(params.default.size_collapsed.split('px')[0]);

  @Input()
  set size(size: number) {
    this._size = size;
  } 

  get size() {
    return this._size;
  }

  public expanded: boolean = false;
  public alternate: boolean = false;
  public mobile: boolean = false;

  @Output()
  public animationDone = new EventEmitter<any>();

  @HostListener('@expand.done', ['$event'])
  public onAnimationDone(event) {
    this.animationDone.emit(event);
  }

  @HostBinding('@expand')
  get expand() {
    this.params = {
      ...(this.mobile ? params.mobile : (this.alternate ? params.alternate : params.default)),
      boxShadow_collapsed: this.params.boxShadow_collapsed,
      size_collapsed: this._size + 'px'
    };
    return {
      value: this.expanded,
      params: this.params
    };
  }


  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.params.boxShadow_collapsed = window.getComputedStyle(this.elementRef.nativeElement).boxShadow;
  }

}
