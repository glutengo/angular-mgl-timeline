import { QueryList, ElementRef } from '@angular/core';
import { MglTimelineEntryComponent } from './../timeline-entry/timeline-entry.component';
import { Component, Input, ContentChildren, AfterViewInit, HostBinding, EventEmitter, Output, HostListener, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { animations } from './timeline.animations';
import { params } from './timeline.styles';

@Component({
  selector: 'mgl-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: animations
})
export class MglTimelineComponent implements AfterViewInit, OnChanges, OnDestroy {

  @Input()
  toggle: boolean = true;

  @Input()
  alternate: boolean = true;

  private _mobile: boolean = false;

  set mobile(mobile: boolean) {
    if (mobile !== this._mobile) {
      this.content && this.content.forEach(entry => entry.mobile = mobile);
    } 
    this._mobile = mobile;
  }

  get mobile() {
    return this._mobile;
  }

  private subscriptions: Subscription[] = [];

  @ContentChildren(MglTimelineEntryComponent) 
  private content: QueryList<MglTimelineEntryComponent>;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(simpleChanges) {
    this.updateContent();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngAfterViewInit() {
    this.mobile = this.elementRef.nativeElement.clientWidth < 640;
    this.updateContent();
    this.content.changes.subscribe(() => this.updateContent());
  }

  private updateContent() {
    this.ngOnDestroy();
    if (this.content) {
      this.content.forEach((entry, index) => {
        if (this.toggle) {
          this.subscriptions.push(
            entry.changed.subscribe(state => {
              if (state === true) {
                this.content.filter(e => e !== entry).forEach(e => e.collapse())
              }
            }));
        }
        entry.alternate = this.alternate ? index % 2 !== 0 : false;
      });

    }
  }

  @HostListener('window:resize')
  onResize(ev: KeyboardEvent) {
    this.mobile = this.elementRef.nativeElement.clientWidth < 640;
  }
}
