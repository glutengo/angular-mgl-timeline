export const styles = {
    display: '{{display}}',
    left: '{{left}}',
    transform: '{{transform}}'
};

const defaultParams = {
    display: 'block',
    left: '75%',
    transform: 'translateX(-50%) translateY(-50%)'
}

const alternateParams = {
    ...defaultParams,
    left: '25%',
}

const mobileParams = {
    ...defaultParams,
    display: 'none'
}

export const params = {
    default: defaultParams,
    alternate: alternateParams,
    mobile: mobileParams
}

export default { styles, params }