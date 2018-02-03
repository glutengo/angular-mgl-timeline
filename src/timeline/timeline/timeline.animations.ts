import { trigger, state, style, AnimationTriggerMetadata } from '@angular/animations';
import { styles, params } from './timeline.styles';

export const animations: AnimationTriggerMetadata[] = [
    trigger('mobile', [
        state('desktop', style({ ...styles }), { params: params.default }),
        state('mobile', style({ ...styles }), { params: params.mobile })
    ])
];