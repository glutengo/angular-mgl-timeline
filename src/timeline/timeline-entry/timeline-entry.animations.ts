import { trigger, state, style, AnimationTriggerMetadata } from '@angular/animations';
import { styles, params } from './timeline-entry.styles';

export const animations: AnimationTriggerMetadata[] = [
    trigger('expand', [
      state('collapsed', style({ ...styles.collapsed }), { params: params.default }),
      state('expanded', style({ ...styles.expanded }), { params: params.default }),
  ])]