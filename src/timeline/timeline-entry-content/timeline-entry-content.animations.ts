import { trigger, state, style, transition, animate, keyframes, query, AnimationTriggerMetadata } from '@angular/animations';
import { styles, params } from './timeline-entry-content.styles';

export const animations: AnimationTriggerMetadata[] = [
    trigger('expand', [
      state('collapsed', style({ ...styles.collapsed }), { params }),
      state('expanded', style({ ...styles.expanded }), { params }),
      transition('collapsed => expanded', [
        animate('300ms ease', keyframes([
          style({ ...styles.collapsed }),
          style({ ...styles.expanded })
        ]))
      ], { params }),
      transition('expanded => collapsed', [
        animate('150ms ease', keyframes([
          style({ ...styles.expanded }),
          style({ ...styles.collapsed })
        ]))
      ], { params })
    ])
  ]