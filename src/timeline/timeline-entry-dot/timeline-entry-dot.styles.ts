export const styles = {
    collapsed: {
        top: '{{top_collapsed}}',
        left: '{{left_collapsed}}',
        width: '{{size_collapsed}}',
        height: '{{size_collapsed}}',
        opacity: '{{opacity_collapsed}}',
        transform: '{{transform_collapsed}}',
        borderRadius: '{{borderRadius_collapsed}}',
        boxShadow: '{{boxShadow_collapsed}}'
    },
    transition: {
        top: '{{top_transition}}',
        left: '{{left_transition}}',
        width: '{{size_transition}}',
        height: '{{size_transition}}',
        opacity: '{{opacity_transition}}',
        transform: '{{transform_transition}}',
        borderRadius: '{{borderRadius_transition}}',
        boxShadow: '{{boxShadow_transition}}'
    },
    expanded: {
        top: '{{top_expanded}}',
        left: '{{left_expanded}}',
        width: '{{size_expanded}}',
        height: '{{size_expanded}}',
        opacity: '{{opacity_expanded}}',
        transform: '{{transform_expanded}}',
        borderRadius: '{{borderRadius_expanded}}',
        boxShadow: '{{boxShadow_expanded}}'
    }
};

const defaultParams = {
    size_collapsed: '45px',
    size_transition: '45px',
    size_expanded: '100%',
    top_collapsed: '50%',
    top_transition: '50%',
    top_expanded: '0',
    transform_collapsed: 'translateX(-50%) translateY(-50%)',
    transform_transition: 'translateX(-25%) translateY(-50%)',
    transform_expanded: 'none',
    left_collapsed: 'calc(100% + 5px)',
    left_transition: '50%',
    left_expanded: '0',
    opacity_collapsed: '1',
    opacity_transition: '0.25',
    opacity_expanded: '1',
    borderRadius_collapsed: '100px',
    borderRadius_transition: '100px',
    borderRadius_expanded: '0',
    boxShadow_collapsed: 'none',
    boxShadow_transition: 'none',
    boxShadow_expanded: 'none'
}

const mobileParams = {
    ...defaultParams,
    left_collapsed: '-6px',
}

const alternateParams = {
    ...defaultParams,
    left_collapsed: '-5px'
}

export const params = {
    default: defaultParams,
    alternate: alternateParams,
    mobile: mobileParams
}