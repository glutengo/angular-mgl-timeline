import { Component, Input, HostBinding, ElementRef, EventEmitter, Output, HostListener, AfterViewInit, Renderer } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Component({
  selector: 'mgl-timeline-entry-dot',
  templateUrl: './timeline-entry-dot.component.html',
  styleUrls: ['./timeline-entry-dot.component.scss']
})
export class MglTimelineEntryDotComponent implements AfterViewInit {

  private _expanded: boolean = false;
  private _alternate: boolean = false;
  private _mobile: boolean = false;
  private initialStyle;
  private _size: number = 50;
  private animation;

  animationDone = new EventEmitter<any>();

  @Input()
  @HostBinding('class')
  color = 'primary';

  constructor(private animationBuilder: AnimationBuilder, private elementRef: ElementRef, private renderer: Renderer) { }

  ngAfterViewInit() {
    this.initialStyle = window.getComputedStyle(this.elementRef.nativeElement);
    this.setStyle();
  }

  @Input()
  set size(size: number) {
    this._size = size;
  }

  get size() {
    return this._size;
  }

  set alternate(alternate: boolean) {
    this._alternate = alternate;
    this.setStyle();
  }

  get alternate() {
    return this._alternate;
  }

  set mobile(mobile: boolean) {
    this._mobile = mobile;
    this.setStyle();
  }

  get mobile() {
    return this._mobile;
  }

  set expanded(expanded: boolean) {
    console.log(expanded);
    const animate = this._expanded !== expanded;
    this._expanded = expanded;
    animate ? this.animate() : this.setStyle()
  }

  get expanded() {
    return this._expanded;
  }

  private getCollapsedStyle() {
    return {
      top: '50%',
      left: (this.alternate || this.mobile) ? '-5px' : 'calc(100% + 5px)',
      width: this.size + 'px',
      height: this.size + 'px',
      opacity: 1,
      transform: 'translateY(-50%) translateX(-50%)',
      boxShadow: this.initialStyle.boxShadow,
      borderRadius: '100px'
    }
  }

  private getTransitionStyle() {
    return {
      ...this.getCollapsedStyle(),
      left: '50%',
      opacity: 0.5,
      boxShadow: 'none'
    }
  }

  private getExpandedStyle() {
    return {
      ...this.getTransitionStyle(),
      left: '0',
      transform: 'translateX(0) translateY(-50%)',
      width: '100%',
      height: '100%',
      opacity: 1,
      borderRadius: 0
    }
  }

  private animate() {
    this.destroyAnimation();
    if (this.expanded) {
      this.animation = this.animationBuilder
        .build([
          style(this.getCollapsedStyle()),
          animate('200ms ease', style(this.getTransitionStyle())),
          animate('200ms ease', style(this.getExpandedStyle())),
        ])
        .create(this.elementRef.nativeElement)
      this.animation.onDone(() => this.animationDone.emit({ toState: 'expanded' }));
      this.animation.play();

    } else {
      this.animationBuilder
      this.animation = this.animationBuilder
        .build([
          style(this.getExpandedStyle()),
          animate('100ms ease', style(this.getTransitionStyle())),
          animate('100ms ease', style(this.getCollapsedStyle())),
        ])
        .create(this.elementRef.nativeElement)
      this.animation.onDone(() => this.animationDone.emit({ toState: 'collapsed' }));
      this.animation.play();
    }
  }

  private setStyle() {
    this.destroyAnimation();
    const baseStyle = this.expanded ? this.getExpandedStyle() : this.getCollapsedStyle();
    Object.keys(baseStyle).forEach(property => {
      this.renderer.setElementStyle(this.elementRef.nativeElement, property, baseStyle[property])
    })
  }

  private destroyAnimation() {
    if (this.animation) {
      this.animation.destroy();
      delete this.animation;
    }
  }

}
