// import './index.css';
// import Elemental from '../../Elemental/src/index';

// locksctoll(elem, exept) // return release;

const ScrollLocker = {};
const preventDefault = e => e.preventDefault;
const isScroll = () => (
    parseInt(window.getComputedStyle(document.documentElement, null).height, 10) >= window.innerHeight
);

const styles = {
    display: 'none',
    position: 'fixed',
    top: '0',
    bottom: '0',
    right: '0',
    backgroundColor: 'rgba(0,0,0, .5)',
    zIndex: '99',
    boxSizing: 'border-box',
};

const config = {
    isActive: false,
    classes: {
        main: 'ScrollLocker',
        hidden: 'ScrollLocker_hidden',
    },
    overlay: document.createElement('div'),
    // lockKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
};

ScrollLocker.lock = (element, except, params = {}) => {
    const {
        overlay,
    } = config;

    element.insertAdjacentElement('afterbegin', overlay);
    Object.assign(overlay.style, styles);
};
//
// class KitLocker {
//     constructor(id) {
//         this.id = id;
//         this.lockKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
//         this.active = false;
//
//         this.onLock = false;
//         this.onRelease = false;
//     }
//
//     lock = () => {
//         if (isScroll()) lockScroll(this)
//     };
//     unlock = () => {
//         if (this.active) releaseScroll(this)
//     };
// }
//
// document.kit.locker.createLocker = (params) => {
//     if (document.kit.locker['instance']) return new Error('Kit Locker already exist');
//     const l = params ? Object.assign(new KitLocker('locker'), params) : new KitLocker('locker');
//     document.kit.locker['instance'] = l;
//     l.overlay = createOverlay('kit-locker-overlay');
//     l.fixed = document.querySelectorAll('.kit-set-fixed');
//     document.kit.locker.lock = l.lock;
//     document.kit.locker.unlock = l.unlock;
// };
//
// function createOverlay(className) {
//     document.body.insertAdjacentHTML('afterbegin', '<div class="' + className + ' kit-none"></div>');
//     return document.querySelector('.' + className);
// }
//
// function lockScroll(obj) {
//     let d = document.documentElement,
//         width = d.offsetWidth;
//     document.addEventListener('touchmove', preventDefault, { passive: false });
//     document.addEventListener('gesturechange', preventDefault);
//     document.addEventListener('keydown', preventKeys.bind(obj));
//     d.kitAddClass('kit-locker-document');
//     obj.overlay.kitAddClass('kit-locker-overlay-scroll');
//     obj.overlay.kitRemoveClass('kit-none');
//     const padding = (d.offsetWidth - width) + 'px';
//     d.style.paddingRight = padding;
//     Object.keys(obj.fixed).forEach((t) => {
//         obj.fixed[t].style.paddingRight = padding;
//     });
//     obj.active = true;
//     if (obj.onLock) obj.onLock();
// }
//
// function releaseScroll(obj) {
//     const d = document.documentElement;
//     document.removeEventListener('touchmove', preventDefault, { passive: false });
//     document.removeEventListener('gesturechange', preventDefault);
//     document.removeEventListener('keydown', preventKeys.bind(obj));
//     d.style.paddingRight = '';
//     Object.keys(obj.fixed).forEach((t) => obj.fixed[t].style.paddingRight = '');
//     d.kitRemoveClass('kit-locker-document');
//     obj.overlay.kitRemoveClass('kit-locker-overlay-scroll');
//     obj.overlay.kitAddClass('kit-none');
//     obj.active = false;
//     if (obj.onRelease) obj.onRelease();
// }
//
// function preventKeys(e) {
//     if (this.lockKeys.indexOf(e.keyCode) >= 0) {
//         preventDefault(e);
//     }
// }
//
// Element.prototype.kitAddClass = function(classN) {
//     if (!this.kitHasClass(classN)) this.className += " " + classN;
//     return this;
// };
//
// Element.prototype.kitRemoveClass = function(classN) {
//     this.kitHasClass(classN) ? this.className = this.className.replace(new RegExp('[\\s]{0,1}\\b' + classN + '\\b', "g"), "") : false;
//     return this;
// };
//
// Element.prototype.kitHasClass = function(classN) {
//     return this.className.indexOf(classN) >= 0;
// };

export default ScrollLocker;