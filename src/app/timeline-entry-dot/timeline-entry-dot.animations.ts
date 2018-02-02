import { trigger, state, style, transition, animate, keyframes, AnimationTriggerMetadata } from '@angular/animations';
import { styles, params } from './timeline-entry-dot.styles';

export const animations: AnimationTriggerMetadata[] = [
    trigger('expand', [
      state('false', style(styles.collapsed), { params: params.default }),
      state('true', style(styles.expanded), { params: params.default }),
      transition('false => true', [
        animate('300ms ease', keyframes([
          style({ ...styles.collapsed }),
          style({ ...styles.transition }),
          style({ ...styles.expanded }),
        ]))
      ], { params: params.default }),
      transition('true => false', [
        animate('150ms ease', keyframes([
          style({ ...styles.expanded }),
          style({ ...styles.transition }),
          style({ ...styles.collapsed })
        ]))
      ], { params: params.default }),
    ])
  ]