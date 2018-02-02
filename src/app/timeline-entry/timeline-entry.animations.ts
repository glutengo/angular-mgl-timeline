import { trigger, state, style, AnimationTriggerMetadata } from '@angular/animations';
import { styles, params } from './timeline-entry.styles';

export const animations: AnimationTriggerMetadata[] = [
    trigger('expand', [
      state('false', style({ ...styles.collapsed }), { params: params.default }),
      state('true', style({ ...styles.expanded }), { params: params.default }),
  ])]