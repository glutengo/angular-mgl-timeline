# angular-mgl-timeline

[![npm version](https://badge.fury.io/js/angular-mgl-timeline.svg)](https://badge.fury.io/js/angular-mgl-timeline)

This is a animated vertical timeline component for Angular 2+. Angular Material is supported but not mandatory.

## Online Demo

An Online Demo with live editing is available on [stackblitz](https://stackblitz.com/edit/angular-mgl-timeline).

## Getting started

1) run `npm install --save angular-mgl-timeline` 
2) in your app module: 
```typescript
...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';

@NgModule({
  ...
  imports: [
    ...
    BrowserAnimationsModule,
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
        <mgl-timeline-entry-header>Header</mgl-timeline-entry-header>
        <mgl-timeline-entry-content>Content</mgl-timeline-entry-content>
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

For Angular 8,9,10
<mgl-timeline-entry-dot [size]="size" style="background-color: color;"></mgl-timeline-entry-dot>
```

### Include side data
```xml
<mgl-timeline>
    <mgl-timeline-entry>
        <mgl-timeline-entry-header>Header</mgl-timeline-entry-header>
        <mgl-timeline-entry-content>Content</mgl-timeline-entry-content>
        <mgl-timeline-entry-side>2018</mgl-timeline-entry-side>
    </mgl-timeline-entry>
</mgl-timeline>
```

## Angular Material

The package includes a theme for angular material. In your own angular material theme:

```scss
@use '@angular/material' as mat;
@use 'angular-mgl-timeline' as mgl;
...

@include mat.all-component-themes($your-theme);
@include mgl.timeline-theme($your-theme);
```
If the theme is included, the components will be styled according to `$your-theme` including support for primary and accent colors for the dot.

## Components

### MglTimeline

#### Content
| tag                    | number |
| ---------------------- | ------ |
| `<mgl-timeline-entry>` |     n  |

#### Inputs

| property             | type    | default  | impact                                                                                          |
| -------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------- |
| toggle               | boolean | true     | If set to true, expanding one entry will collapse all other entries and vice versa              |
| alternate            | boolean | true     | If set to true, entries will be displayed alternately (left / right). No effect in mobile mode  |
| focusOnOpen          | boolean | false    | If set to true, expanding an entry will scroll it into view                                     |
| side                 | string  | 'left'   | Changes side (`'left'` | `'right'`) the entries are shown on. No effect if alternate is `true`  |
| mobileWidthThreshold | number  | 640      | Decides when the mobile layout is used                                                          |

### MglTimelineEntry
The `expanded` class will be added to the timeline-entry compnent when the entry is expanded.  

#### Content
| tag                            | number |
| ------------------------------ | ------ |
| `<mgl-timeline-entry-header>`  |     1  |
| `<mgl-timeline-entry-content>` |     1  |
| `<mgl-timeline-entry-dot>`     | 0...1  |
| `<mgl-timeline-entry-side>`    | 0...1  |

#### Outputs

| event           | type    | description
| --------------- | ------- | --------------------------------------------
| expand          | boolean | fired when an entry is expanded / collapsed. Value is true for expanded and false for collapsed

### MglTimelineEntryHeader

### MglTimelineEntryContent

#### Inputs

| property                 | type    | default      | impact                                                                                         |
| ------------------------ | ------- | ------------ | ---------------------------------------------------------------------------------------------- |
| expandAnimationTiming    | string  | '200ms ease' | Controls the animation speed of the content of an entry. Set to `0ms` to disable the animation |
| collapseAnimationTiming  | string  | '100ms ease' | Controls the animation speed of the content of an entry. Set to `0ms` to disable the animation |


### MglTimelineEntryDot

#### Inputs
| property | type   | default | impact                                                                                                             |
| -------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------ |
| size     | number |     45  | Size of the dot [px]                                                                                               |
| class    | string | primary | Will be set as class name of the dot element. primary and accent can be used when using the angular material theme |
| expandAnimationTiming    | string  | '200ms ease' | Controls the animation speed of the dot of an entry. Set to `0ms` to disable the animation   |
| collapseAnimationTiming  | string  | '100ms ease' | Controls the animation speed of the dot of an entry. Set to `0ms` to disable the animation   |


## License
MIT License (c) Markus Glutting
