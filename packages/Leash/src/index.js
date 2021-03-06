/*! SmokinSexySoftware: sss-leash
* https://github.com/Natteke
* Copyright (c) 2019-present Andrey Ponomarenko; */

import styles from './components/styles';
import { lockY, lockX } from './components/lock';
import { releaseY, releaseX } from './components/release';
import {
    isScrollBar,
    isScrollAvailable,
    isScrollable,
    injectCss,
} from './components/helpers';

// TODO: lock, release /-> make it for safari on iphones
// container.removeEventListener('touchmove', Leash.preventDefault, { passive: false });

class Leash {
    constructor(element) {
        Leash.counter += 1;
        this.container = element || (() => new Error('1st argument element required'));
        this.id = Leash.counter;
        this.init();
    }

    static counter = 0;

    static preventDefault = e => e.preventDefault;

    static isScrollBar = isScrollBar;

    static isScrollAvailable = isScrollAvailable;

    static isScrollable = isScrollable;

    static leashSelector = 'data-leash';

    static fixedSelector = '[data-scroll-fixed]';

    isActiveX = false;

    isActiveY = false;

    overlay = document.createElement('div');


    init = () => {
        const { overlay, container } = this;
        injectCss(overlay, styles.overlay);
        injectCss(container, styles.borderBox);
        this.container.insertAdjacentElement('afterbegin', overlay);
        this.container.setAttribute(Leash.leashSelector, this.id);

        // container should not be static
        const containerPosition = getComputedStyle(this.container).position;
        if (containerPosition === 'static') this.container.style.position = 'relative';
    };

    lockY = lockY.bind(this);

    lockX = lockX.bind(this);

    releaseY = releaseY.bind(this);

    releaseX = releaseX.bind(this);

    // selectFixedElements = () => document.querySelectorAll(`[data-scroll="${this.id}"] > ${Leash.fixedSelector}`);
    selectFixedElements = () => document.querySelectorAll(`[${Leash.leashSelector}="${this.id}"] ${Leash.fixedSelector}`);
    // selectFixedElements = () => document.querySelectorAll(Leash.fixedSelector);
}

export default Leash;
