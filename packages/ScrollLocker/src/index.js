import './index.css';
import Elemental from '../../Elemental/src/index';


const classes = {
    main: 'ScrollLocker',
    scroll: 'ScrollLocker_scroll',
    lock: 'ScrollLocker_lock',
    hidden: 'ScrollLocker_hidden',
    fixed: 'ScrollLocker_fixed',
};

class ScrollLocker {
    constructor(element, params = {}) {
        this.container = element || (() => new Error('1st argument element required'));
        this.init();
    }

    isActive = false;

    fixedElements = document.querySelectorAll(`.${classes.fixed}`);

    overlay = document.createElement('div');

    init = () => {
        const { overlay } = this;
        this.container.insertAdjacentElement('afterbegin', overlay);
        Elemental.addClass(overlay, `${classes.main} ${classes.hidden}`);
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
        container.addEventListener('touchmove', ScrollLocker.preventDefault, { passive: false });
        if (containerPosition === 'static') container.style.position = 'relative';
        Elemental.addClass(container, classes.lock);
        Elemental.addClass(overlay, classes.scroll);
        Elemental.removeClass(overlay, classes.hidden);
        // detect actual scroll width
        const padding = `${container.scrollWidth - width}px`;
        container.style.paddingRight = padding;
        Object.keys(fixedElements).forEach((t) => {
            fixedElements[t].style.paddingRight = padding;
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
        container.removeEventListener('touchmove', ScrollLocker.preventDefault, { passive: false });
        Elemental.removeClass(container, lock);
        Elemental.removeClass(overlay, scroll);
        Elemental.addClass(overlay, hidden);
        container.style.paddingRight = '';
        Object.keys(fixedElements).forEach((t) => {
            fixedElements[t].style.paddingRight = '';
        });
        this.isActive = false;
    };

    static preventDefault = e => e.preventDefault;

    static isScroll = () => (
        parseInt(window.getComputedStyle(document.documentElement, null).height, 10) >= window.innerHeight
    );
}

export default ScrollLocker;
