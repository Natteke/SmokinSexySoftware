const styles = {
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
    lock: {
        overflowY: 'hidden',
    },
    release: {
        overflowY: '',
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
};

class ScrollLocker {
    constructor(element, params = {}) {
        ScrollLocker.counter += 1;
        this.container = element || (() => new Error('1st argument element required'));
        this.id = ScrollLocker.counter;
        this.init();
    }

    static counter = 0;

    static preventDefault = e => e.preventDefault;

    static isScroll = (element) => {
        const startOverflow = element.style.overflowY;
        const startWidth = element.clientWidth;
        element.style.overflowY = 'hidden';
        const endWidth = element.clientWidth;
        element.style.overflowY = startOverflow;
        return startWidth !== endWidth;
    };

    static injectCss = (element, cssObj) => Object.assign(element.style, cssObj);

    static fixedClass = '[data-scroll-fixed]';

    isActive = false;

    overlay = document.createElement('div');


    init = () => {
        const { overlay, container } = this;
        ScrollLocker.injectCss(overlay, styles.overlay);
        ScrollLocker.injectCss(container, styles.borderBox);
        this.container.insertAdjacentElement('afterbegin', overlay);
        this.container.dataset.scroll = this.id;
        // container should not be static
        const containerPosition = getComputedStyle(this.container).position;
        if (containerPosition === 'static') this.container.style.position = 'relative';
    };

    lock = () => {
        const {
            container,
            overlay,
        } = this;
        const isScroll = ScrollLocker.isScroll(container);
        console.log('isScroll: ', isScroll);
        if (!isScroll) return;
        // remind container width before hiding a scroll
        const width = container.scrollWidth;
        // test feature
        // container.addEventListener('touchmove', Scroll.preventDefault, { passive: false });

        // lock container's scroll
        ScrollLocker.injectCss(container, styles.lock);
        // display overlay
        ScrollLocker.injectCss(overlay, styles.show);
        // detect actual scroll width
        const indent = `${container.scrollWidth - width}px`;
        // add margin to prevent overlay layering on content
        container.style.paddingRight = indent;
        // get fixed elements in current state of the container
        const fixedElements = this.selectFixedElements();
        Object.keys(fixedElements).forEach((t) => {
            fixedElements[t].style.marginRight = indent;
        });
        this.isActive = true;
    };

    release = () => {
        const {
            container,
            overlay,
            isActive,
        } = this;
        console.dir(isActive);
        if (!isActive) return;
        // test feature
        // container.removeEventListener('touchmove', ScrollLocker.preventDefault, { passive: false });

        // release container's scroll
        ScrollLocker.injectCss(container, styles.release);
        // hide overlay
        ScrollLocker.injectCss(overlay, styles.hide);
        // remove pseudo margin
        container.style.paddingRight = '';
        const fixedElements = this.selectFixedElements();
        Object.keys(fixedElements).forEach((t) => {
            fixedElements[t].style.marginRight = '';
        });
        this.isActive = false;
    };

    selectFixedElements = () => document.querySelectorAll(`[data-scroll="${this.id}"] ${ScrollLocker.fixedClass}`);
}

export default ScrollLocker;
