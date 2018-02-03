import { trigger, state, style, transition, animate, keyframes, query, AnimationTriggerMetadata } from '@angular/animations';
import { styles, params } from './timeline-entry-content.styles';

export const animations: AnimationTriggerMetadata[] = [
    trigger('expand', [
      state('false', style({ ...styles.collapsed }), { params }),
      state('true', style({ ...styles.expanded }), { params }),
      transition('false => true', [
        animate('300ms ease', keyframes([
          style({ ...styles.collapsed }),
          style({ ...styles.expanded })
        ]))
      ], { params }),
      transition('true => false', [
        animate('150ms ease', keyframes([
          style({ ...styles.expanded }),
          style({ ...styles.collapsed })
        ]))
      ], { params })
    ])
  ]