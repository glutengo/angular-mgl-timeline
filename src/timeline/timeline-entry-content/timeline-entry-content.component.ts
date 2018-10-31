import { AnimationBuilder, style, animate } from '@angular/animations';
import { Component, EventEmitter, ElementRef, AfterViewInit, Renderer } from '@angular/core';

@Component({
  selector: 'mgl-timeline-entry-content',
  templateUrl: './timeline-entry-content.component.html',
  styleUrls: ['./timeline-entry-content.component.scss']
})
export class MglTimelineEntryContentComponent implements AfterViewInit {

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

  constructor(private elementRef: ElementRef, private animationBuilder: AnimationBuilder, private renderer: Renderer) { }

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
          animate('100ms ease', style(this.getExpandedStyle())),
        ])
        .create(this.elementRef.nativeElement)
      animation.onDone(() => this.animationDone.emit({ toState: 'expanded' }));
      animation.play();

    } else {
      this.animationBuilder
      const animation = this.animationBuilder
        .build([
          style(this.getExpandedStyle()),
          animate('200ms ease', style(this.getCollapsedStyle())),
        ])
        .create(this.elementRef.nativeElement)
      animation.onDone(() => this.animationDone.emit({ toState: 'collapsed' }));
      animation.play();
    }
  }

  setStyle() {
    const baseStyle = this.expanded ? this.getExpandedStyle() : this.getCollapsedStyle();
    Object.keys(baseStyle).forEach(property => {
      this.renderer.setElementStyle(this.elementRef.nativeElement, property, baseStyle[property])
    })
  }

}
