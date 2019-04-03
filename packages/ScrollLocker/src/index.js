import './index.css';
import Elemental from '../../Elemental/src/index';


const classes = {
    main: 'ScrollLocker',
    scroll: 'ScrollLocker_scroll',
    lock: 'ScrollLocker_lock',
    hidden: 'ScrollLocker_hidden',
    fixed: '[data-scrollLocker="fixed"]',
    borderBox: 'ScrollLocker_borderBox',
};

const defaultParams = {
    willBorderBox: true,
};

class ScrollLocker {
    constructor(element, params = {}) {
        this.container = element || (() => new Error('1st argument element required'));
        // set false to prevent set box-sizing: border-box to container
        this.willBorderBox = params.willBorderBox || defaultParams.willBorderBox;
        this.init();
    }

    isActive = false;

    fixedElements = document.querySelectorAll(classes.fixed);

    overlay = document.createElement('div');

    init = () => {
        const { overlay } = this;
        Elemental.addClass(overlay, `${classes.main} ${classes.hidden}`);
        this.container.insertAdjacentElement('afterbegin', overlay);
        if (this.willBorderBox) Elemental.addClass(this.container, classes.borderBox);
    };

    lock = () => {
        const {
            container,
            overlay,
            fixedElements,
        } = this;
        const containerPosition = getComputedStyle(container).position;
        // remind container width before hiding a scroll
        const width = container.scrollWidth;
        // container.addEventListener('touchmove', ScrollLocker.preventDefault, { passive: false });
        // container should not be static
        if (containerPosition === 'static') container.style.position = 'relative';
        // lock container's scroll
        Elemental.addClass(container, classes.lock);
        // add pseudo-scroll to ovelay
        Elemental.addClass(overlay, classes.scroll);
        // display overlay
        Elemental.removeClass(overlay, classes.hidden);
        // detect actual scroll width
        const indent = `${container.scrollWidth - width}px`;
        // add margin to prevent overlay layering on content
        container.style.paddingRight = indent;
        Object.keys(fixedElements).forEach((t) => {
            fixedElements[t].style.marginRight = indent;
        });
        this.isActive = true;
    };

    release = () => {
        const {
            container,
            overlay,
            fixedElements,
        } = this;
        const { hidden, lock, scroll } = classes;
        // container.removeEventListener('touchmove', ScrollLocker.preventDefault, { passive: false });
        // release container's scroll
        Elemental.removeClass(container, lock);
        // remove overlay pseudo-scroll
        Elemental.removeClass(overlay, scroll);
        // hide overlay
        Elemental.addClass(overlay, hidden);
        // remove pseudo margin
        container.style.paddingRight = '';
        Object.keys(fixedElements).forEach((t) => {
            fixedElements[t].style.marginRight = '';
        });
        this.isActive = false;
    };

    static preventDefault = e => e.preventDefault;

    static isScroll = element => (
        parseInt(getComputedStyle(element, null).height, 10) >= element.innerHeight
    );
}

export default ScrollLocker;
