/*! SmokinSexySoftware: sss-elemental
* https://github.com/Natteke
* Copyright (c) 2019-present Andrey Ponomarenko; */

const Elemental = {};

// add function setStyle from js object
/* https://regex101.com/r/9kYy03/4 */
Elemental.regexp = string => (
    new RegExp(`(\\s|^)${string}(\\s|$)`)
);

Elemental.hasClass = (element, string) => Elemental.regexp(string).test(element.className);

Elemental.get = string => [].slice.call(document.querySelectorAll(string));

Elemental.addClass = (element, string) => {
    let { className } = element;
    if (!Elemental.hasClass(element, string)) {
        const space = className.length > 0 ? ' ' : '';
        className += `${space}${string}`;
    }
    element.setAttribute('class', className);
    return element;
};

Elemental.removeClass = (element, string) => {
    const className = element.className
        .split(' ')
        .filter(e => e !== string)
        .join(' ');
    element.setAttribute('class', className);
    return element;
};

Elemental.toggleClass = (element, string) => {
    if (Elemental.hasClass(element, string)) {
        Elemental.removeClass(element, string);
    } else {
        Elemental.addClass(element, string);
    }
    return element;
};

// patch Element.prototype with Elemental methods
Elemental.eject = () => {
    // props we want to eject
    const methods = Object.getOwnPropertyNames(Elemental).filter(e => Elemental.propsToEject.indexOf(e) >= 0);
    methods.forEach((methodName) => {
        Element.prototype[methodName] = (function(className) {
            return Elemental[methodName](this, className);
        });
    });
};

// assign styles in element's style directly
Elemental.injectCss = (element, cssObj) => Object.assign(element.style, cssObj);

Elemental.propsToEject = [
    'addClass',
    'removeClass',
    'hasClass',
    'toggleClass',
    'injectCss',
];

export default Elemental;
