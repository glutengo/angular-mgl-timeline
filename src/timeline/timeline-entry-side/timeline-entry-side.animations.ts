import { trigger, state, style, AnimationTriggerMetadata } from '@angular/animations';
import { styles, params } from './timeline-entry-side.styles';

export const animations: AnimationTriggerMetadata[]= [
    trigger('style', [
      state('mobile', style({ ...styles }), { params: params.mobile }),
      state('alternate', style({ ...styles }), { params: params.alternate }),
      state('default', style({ ...styles }), { params: params.default })
    ]),
  ]