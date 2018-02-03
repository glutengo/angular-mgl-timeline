# MglAngularTimeline

This is a vertical timelne component for Angular 5. Angular Material is supported but not mandatory.

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

## Angular Material

The package includes a theme for angular material. In your own angular material theme:

```scss
@import '~@angular/material/theming';
@import '~mgl-angular-timeline/theme';
...

@include angular-material-theme($your-theme);
@include mgl-timeline-theme($your-theme);
```
If the theme is included, the components will be styled according to `$your-theme` including support for primary and accent colors for the dot.

## Components

### MglTimeline

#### Content
| tag                    | number |
| ---------------------- | ------ |
| `<mgl-timeline-entry>` | n      |

#### Inputs

| property  | type    | default | impact                                                                                         |
| --------- | ------- | ------- | ---------------------------------------------------------------------------------------------- |
| toggle    | boolean | true    | If set to true, expanding one entry will collapse all other entries and vice versa             |
| alternate | boolean | true    | If set to true, entries will be displayed alternately (left / right). No effect in mobile mode |


### MglTimelineEntry

#### Content
| tag                            | number |
| ------------------------------ | ------ |
| `<mgl-timeline-entry-header>`  | 1      |
| `<mgl-timeline-entry-content>` | 1      |
| `<mgl-timeline-entry-dot>`     | 0...1  |
| `<mgl-timeline-entry-side>`    | 0...1  |

### MglTimelineEntryHeader

### MglTimelineEntryContent

### MglTimelineEntryDot

#### Inputs
| property | type   | default | impact                                                                                                             |
| -------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------ |
| size     | number | 45      | Size of the dot [px]                                                                                               |
| color    | string | primary | Will be set as class name of the dot element. primary and accent can be used when using the angular material theme |



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
