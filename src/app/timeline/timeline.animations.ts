import { trigger, state, style, AnimationTriggerMetadata } from '@angular/animations';
import { styles, params } from './timeline.styles';

export const animations: AnimationTriggerMetadata[] = [
    trigger('mobile', [
        state('false', style({ ...styles }), { params: params.default }),
        state('true', style({ ...styles }), { params: params.mobile })
    ])
];