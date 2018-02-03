import { MglTimelineEntrySideComponent } from './../timeline-entry-side/timeline-entry-side.component';
import { Subscription } from 'rxjs/Subscription';
import { MglTimelineEntryDotComponent } from './../timeline-entry-dot/timeline-entry-dot.component';
import { Component, AfterViewInit, Output, EventEmitter, HostBinding, ContentChild, OnDestroy } from '@angular/core';
import { MglTimelineEntryContentComponent } from '../timeline-entry-content/timeline-entry-content.component';
import { MglTimelineEntryHeaderComponent } from '../timeline-entry-header/timeline-entry-header.component';
import { params } from './timeline-entry.styles';
import { animations } from './timeline-entry.animations';

@Component({
  selector: 'mgl-timeline-entry',
  templateUrl: './timeline-entry.component.html',
  styleUrls: ['./timeline-entry.component.scss'],
  animations: animations
})
export class MglTimelineEntryComponent implements AfterViewInit, OnDestroy {

  private params = { ...params.default };
  private subscriptions: Subscription[] = [];

  set expanded(expanded) {
    if (this.dot && expanded) {
      this.dot.expanded = expanded;
    } else {
      this.content.expanded = expanded
    }
    this.changed.emit(expanded);
  }

  get expanded() {
    return this.dot ? (this.dot.expanded && this.content.expanded) : this.content.expanded;
  }

  @HostBinding('class.alternate')
  private _alternate: boolean = false;

  set alternate(alternate) {
    this._alternate = alternate;
    if (this.dot) {
      this.dot.alternate = this._alternate;
    }
    if (this.side) {
      this.side.alternate = this._alternate;
    }
  }

  get alternate() {
    return this._alternate;
  }

  private _mobile: boolean = false;

  set mobile(mobile) {
    this._mobile = mobile;
    if (this.dot) {
      this.dot.mobile = this._mobile;
    }
    if (this.side) {
      this.side.mobile = this._mobile;
    }
  }

  get mobile() {
    return this._mobile;
  }

  get expandAnimation() {
    this.params = {
      ...(this.mobile ? params.mobile : (this.alternate ? params.alternate : params.default))
    };
    return {
      value: this.expanded,
      params: this.params
    };
  }

  @Output()
  changed = new EventEmitter<boolean>();

  @Output()
  animationDone = new EventEmitter<string>();

  @ContentChild(MglTimelineEntryContentComponent) content: MglTimelineEntryContentComponent;
  @ContentChild(MglTimelineEntryHeaderComponent) header: MglTimelineEntryHeaderComponent;
  @ContentChild(MglTimelineEntryDotComponent) dot: MglTimelineEntryDotComponent;
  @ContentChild(MglTimelineEntrySideComponent) side: MglTimelineEntrySideComponent;

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.dot) {
        this.subscriptions.push(this.dot.animationDone.subscribe(event => {
          if (event.toState === true) {
            this.content.expanded = true;
          } else {
            this.animationDone.emit(event);
          }
        }));
      }
      this.subscriptions.push(this.content.animationDone.subscribe(event => {
        if (this.dot && event.toState === false) {
          this.dot.expanded = false;
        } else {
          this.animationDone.emit(event);
        }
      }));
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  collapse() {
    this.expanded = false;
  }

  expand() {
    this.expanded = true;
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
