# MglAngularTimeline

This is a vertical timelne component for Angular 5. It was built to be used with Angular Material but it can also be used without it. Entries consist of a header and a content component. The header is always visible. The content will be revealed via an animation when the entry is expanded.

## Getting started

1) run `npm install --save mgl-angular-timeline` 
2) in your app module: 
```typescript
...
import { MglTimelineModule } from 'mgl-angular-timeline';

@NgModule({
  ...
  imports: [
    ...
    MglTimelineModule
  ]
})
export class AppModule { }
```
## Usage

### Minimal Setup
```xml
<mgl-timeline>
    <mgl-timeline-entry>
        <mgl-timeline-header>Header</mgl-timeline-header>
        <mgl-timeline-content>Content</mgl-timeline-content>
    </mgl-timeline-entry>
</mgl-timeline>
```

### Include a dot
```xml
<mgl-timeline>
    <mgl-timeline-entry>
        <mgl-timeline-entry-header>Header</mgl-timeline-entry-header>
        <mgl-timeline-entry-content>Content</mgl-timeline-entry-content>
        <mgl-timeline-entry-dot></mgl-timeline-entry-dot>
    </mgl-timeline-entry>
</mgl-timeline>
```

### Include side data
```xml
<mgl-timeline>
    <mgl-timeline-entry>
        <mgl-timeline-entry-header>Header</mgl-timeline-entry-header>
        <mgl-timeline-entry-content>Content</mgl-timeline-entry-content>
        <mgl-timeline-entry-side></mgl-timeline-entry-side>
    </mgl-timeline-entry>
</mgl-timeline>
```

## API

### Timeline
The timeline is the main container component. It can handle the state of its child components (entries) concerning toggle, alternate and mobile. The vertical line is also part of this component.

Children: List<TimelineEntry>

#### Inputs:

* `toggle`: boolean
* `alternate`: boolean


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
