export const styles = {
    collapsed: {
        width: '{{width_collapsed}}',
        marginLeft: '{{left_collapsed}}'
    },
    expanded: {
        width: '{{width_expanded}}',
        marginLeft: '{{left_expanded}}'
    }
}

const defaultParams = {
    width_collapsed: 'calc(50% - 5px)',
    width_expanded: 'calc(50% - 5px)',
    left_collapsed: '0',
    left_expanded: '0'
}

const alternateParams = {
    ...defaultParams,
    left_collapsed: 'calc(50% + 5px)',
    left_expanded: 'calc(50% + 5px)'
}

const mobileParams = {
    width_collapsed: 'calc(100% - 40px)',
    width_expanded: 'calc(100% - 40px)',
    left_collapsed: '30px',
    left_expanded: '30px'
}

export const params = {
    default: defaultParams,
    alternate: alternateParams,
    mobile: mobileParams
}

export default {
    styles, params
}

export interface MglTimelineEntryStyles {
    width_collapsed?: string,
    width_expanded?: string,
    left_collapsed?: string,
    left_expanded?: string
}

export interface MglTimelineEntryStyleParams {
    default?: MglTimelineEntryStyles,
    alternate?: MglTimelineEntryStyles,
    mobile?: MglTimelineEntryStyles
}