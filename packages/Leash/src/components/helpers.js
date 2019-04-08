/* eslint-disable no-param-reassign */

// is scrollbar is displayed in container
export const isScrollBar = (element) => {
    // save elements width
    const starts = {
        width: element.clientWidth,
        height: element.clientHeight,
    };

    // add overflow and save again
    element.style.overflow = 'hidden';
    const ends = {
        width: element.clientWidth,
        height: element.clientHeight,
    };
    // set overflow as it was before check
    element.style.overflow = '';

    // if size was changed, then scrollBar is exist
    return {
        y: starts.width !== ends.width,
        x: starts.height !== ends.height,
    };
};

export const isScrollAvailable = (element) => {
    // save initial scroll position
    const starts = {
        x: element.scrollLeft,
        y: element.scrollTop,
    };

    // scroll it at least for 1 px and save new position
    element.scrollTop = 0;
    element.scrollTop = 1;
    element.scrollLeft = 0;
    element.scrollLeft = 1;

    const ends = {
        x: element.scrollLeft,
        y: element.scrollTop,
    };

    // return initial position
    element.scrollTop = starts.y;
    element.scrollLeft = starts.x;

    // if scroll position was changed
    // then it can be scrolled
    return {
        y: (starts.y !== ends.y),
        x: (starts.x !== ends.x),
    };
};

export const isScrollable = (element) => {
    const canBeScrolled = isScrollAvailable(element);
    const isBarExist = isScrollBar(element);

    // if can be scrolled, and scrollbar exist,
    // then container is scrollable
    return {
        y: canBeScrolled.y && isBarExist.y,
        x: canBeScrolled.x && isBarExist.x,
    };
};

export const styles = {
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

export const injectCss = (element, cssObj) => Object.assign(element.style, cssObj);

export const setFixedElementsDirectly = (elements, prop, value) => {
    Object.keys(elements).forEach((t) => {
        elements[t].style[prop] = value;
    });
};
