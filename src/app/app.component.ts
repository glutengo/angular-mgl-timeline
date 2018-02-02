import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  alternate: boolean = false;
  toggle: boolean = false;
  color: boolean = false;
  size: number = 40;

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
    console.log(this.entries);
  }

  removeEntry() {
    this.entries.pop();
  }

  animation(event) {
    console.log(event);
  }
}
