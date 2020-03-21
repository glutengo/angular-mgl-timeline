import { AnimationBuilder, style, animate } from '@angular/animations';
import { Component, EventEmitter, ElementRef, AfterViewInit, Renderer2, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'mgl-timeline-entry-content',
  templateUrl: './timeline-entry-content.component.html',
  styleUrls: ['./timeline-entry-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MglTimelineEntryContentComponent implements AfterViewInit {

  @Input()
  expandAnimationTiming = '200ms ease';

  @Input()
  collapseAnimationTiming = '100ms ease';

  private contentHeight;
  animationDone = new EventEmitter<any>();

  private _expanded: boolean = false;

  set expanded(expanded: boolean) {
    this.contentHeight = this.elementRef.nativeElement.scrollHeight;
    const animate = this._expanded !== expanded;
    this._expanded = expanded;
    animate ? this.animate() : this.setStyle
  }

  get expanded() {
    return this._expanded;
  }

  constructor(private elementRef: ElementRef, private animationBuilder: AnimationBuilder, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.contentHeight = this.elementRef.nativeElement.scrollHeight;
    this.setStyle();
  }

  private getCollapsedStyle() {
    return {
      height: '0px'
    }
  }

  private getExpandedStyle() {
    return {
      height: this.contentHeight + 'px'
    }
  }

  animate() {
    if (this.expanded) {
      const animation = this.animationBuilder
        .build([
          style(this.getCollapsedStyle()),
          animate(this.expandAnimationTiming, style(this.getExpandedStyle())),
        ])
        .create(this.elementRef.nativeElement)
      animation.onDone(() => this.animationDone.emit({ toState: 'expanded' }));
      animation.play();

    } else {
      this.animationBuilder
      const animation = this.animationBuilder
        .build([
          style(this.getExpandedStyle()),
          animate(this.collapseAnimationTiming, style(this.getCollapsedStyle())),
        ])
        .create(this.elementRef.nativeElement)
      animation.onDone(() => this.animationDone.emit({ toState: 'collapsed' }));
      animation.play();
    }
  }

  setStyle() {
    const baseStyle = this.expanded ? this.getExpandedStyle() : this.getCollapsedStyle();
    Object.keys(baseStyle).forEach(property => {
      this.renderer.setStyle(this.elementRef.nativeElement, property, baseStyle[property])
    })
  }

}
