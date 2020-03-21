import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  title = 'app';

  alternate: boolean = false;
  toggle: boolean = false;
  color: boolean = false;
  dotAnimation: boolean = true;
  contentAnimation: boolean = true;
  size: number = 40;
  side: string = 'left';
  mobileWidthThreshold: number = 640;

  entries = [
    {
      header: 'header',
      content: 'content'
    }
  ]

  addEntry() {
    this.entries.push({
      header: 'header',
      content: 'content'
    })
  }

  removeEntry() {
    this.entries.pop();
  }

  onExpand(event, index) {
    console.log(event, index);
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }
}
