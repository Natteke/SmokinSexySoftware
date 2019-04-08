export default {
    overlay: {
        display: 'none',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        zIndex: 99,
        boxSizing: 'border-box',
        overflowY: 'scroll',
    },
    show: {
        display: '',
    },
    hide: {
        display: 'none',
    },
    borderBox: {
        boxSizing: 'border-box',
    },
    lockY: { overflowY: 'hidden' },
    lockX: { overflowX: 'hidden' },
    releaseY: { overflowY: '' },
    releaseX: { overflowX: '' },
};
