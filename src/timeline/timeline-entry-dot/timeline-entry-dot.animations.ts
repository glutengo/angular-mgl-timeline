import { trigger, state, style, transition, animate, keyframes, AnimationTriggerMetadata } from '@angular/animations';
import { styles, params } from './timeline-entry-dot.styles';

export const animations: AnimationTriggerMetadata[] = [
    trigger('expand', [
      state('collapsed', style(styles.collapsed), { params: params.default }),
      state('expanded', style(styles.expanded), { params: params.default }),
      transition('collapsed => expanded', [
        animate('300ms ease', keyframes([
          style({ ...styles.collapsed }),
          style({ ...styles.transition }),
          style({ ...styles.expanded }),
        ]))
      ], { params: params.default }),
      transition('expanded => collapsed', [
        animate('150ms ease', keyframes([
          style({ ...styles.expanded }),
          style({ ...styles.transition }),
          style({ ...styles.collapsed })
        ]))
      ], { params: params.default }),
    ])
  ]