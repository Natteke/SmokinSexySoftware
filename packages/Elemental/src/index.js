const Elemental = {};

/* https://regex101.com/r/9kYy03/4 */
Elemental.regexp = string => (
    new RegExp(`\\s?((?<!(\\w))\\s)?(?<!([-+$\\[\\]\\w]))${string}(?!([-+$\\[\\]\\w]))`)
);

Elemental.hasClass = (element, string) => Elemental.regexp(string).test(element.className);

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

// patch Element.prototype with Elemental methods
Elemental.eject = () => {
    // props we want to eject
    const shouldEject = ['addClass', 'removeClass', 'hasClass'];
    const methods = Object.getOwnPropertyNames(Elemental)
        .filter(e => shouldEject.indexOf(e) >= 0);
    methods.forEach((methodName) => {
        Element.prototype[methodName] = (function (className) {
            return Elemental[methodName](this, className);
        });
    });
};

export default Elemental;
