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

class Scroll {
    constructor(element, params = {}) {
        Scroll.counter += 1;
        this.container = element || (() => new Error('1st argument element required'));
        this.id = Scroll.counter;
        this.init();
    }

    static counter = 0;

    static preventDefault = e => e.preventDefault;

    static isScroll = element => (
        parseInt(getComputedStyle(element, null).height, 10) >= element.innerHeight
    );

    static injectCss = (element, cssObj) => Object.assign(element.style, cssObj);

    static fixedClass = '[data-scroll-fixed]';

    isActive = false;

    overlay = document.createElement('div');


    init = () => {
        const { overlay, container } = this;
        Scroll.injectCss(overlay, styles.overlay);
        Scroll.injectCss(container, styles.borderBox);
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
        // remind container width before hiding a scroll
        const width = container.scrollWidth;
        // test feature
        // container.addEventListener('touchmove', Scroll.preventDefault, { passive: false });

        // lock container's scroll
        Scroll.injectCss(container, styles.lock);
        // display overlay
        Scroll.injectCss(overlay, styles.show);
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
        } = this;
        // test feature
        // container.removeEventListener('touchmove', Scroll.preventDefault, { passive: false });

        // release container's scroll
        Scroll.injectCss(container, styles.release);
        // hide overlay
        Scroll.injectCss(overlay, styles.hide);
        // remove pseudo margin
        container.style.paddingRight = '';
        const fixedElements = this.selectFixedElements();
        Object.keys(fixedElements).forEach((t) => {
            fixedElements[t].style.marginRight = '';
        });
        this.isActive = false;
    };

    selectFixedElements = () => document.querySelectorAll(`[data-scroll="${this.id}"] ${Scroll.fixedClass}`);
}

export default Scroll;
