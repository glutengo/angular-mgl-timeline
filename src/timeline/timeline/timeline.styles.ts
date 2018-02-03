export const styles = {
    transform: '{{transform}}',
    left: '{{left}}',
    width: '{{width}}'
};

const defaultParams = {
    left: '50%',
    width: '10px',
    transform: 'translateX(-50%)'
}

const mobileParams = {
    ...defaultParams,
    left: '20px',
    transform: 'none'
}

export const params = {
    default: defaultParams,
    mobile: mobileParams
}

export default { styles, params }