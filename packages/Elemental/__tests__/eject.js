import Elemental from '../src/index';


describe('Eject', () => {
    const testClass = 'apple-test';
    const html = `<div class="${testClass}"></div>`;
    const targetSelector = 'div';
    Elemental.eject();

    it('addClass is defined', () => {
        document.body.innerHTML = html;
        expect(typeof document.body.addClass).toBe('function');
    });

    it('removeClass is defined', () => {
        document.body.innerHTML = html;
        expect(typeof document.body.removeClass).toBe('function');
    });

    it('hasClass is defined', () => {
        document.body.innerHTML = html;
        expect(typeof document.body.hasClass).toBe('function');
    });

    it('toggleClass is defined', () => {
        document.body.innerHTML = html;
        expect(typeof document.body.toggleClass).toBe('function');
    });

    it('injectCss is defined', () => {
        document.body.innerHTML = html;
        expect(typeof document.body.injectCss).toBe('function');
    });

    it('Element addClass', () => {
        document.body.innerHTML = html;
        const target = document.querySelector(targetSelector);
        target.addClass('apple');
        expect(target.className).toBe(`${testClass} apple`);
    });

    it('Element toggleAdd', () => {
        document.body.innerHTML = html;
        const target = document.querySelector(targetSelector);
        target.toggleClass('apple');
        expect(target.className).toBe(`${testClass} apple`);
    });

    it('Element toggleRemove', () => {
        document.body.innerHTML = html;
        const target = document.querySelector(targetSelector);
        target.toggleClass(testClass);
        expect(target.className).toBe('');
    });

    it('Element removeClass', () => {
        document.body.innerHTML = html;
        const target = document.querySelector(targetSelector);
        target.removeClass(testClass);
        expect(target.className).toBe('');
    });

    it('Element hasClass', () => {
        document.body.innerHTML = html;
        const target = document.querySelector(targetSelector);
        const hasClass = target.hasClass(testClass);
        expect(hasClass).toBe(true);
    });

    it('Element injectCss', () => {
        document.body.innerHTML = '<div></div>';
        const target = document.querySelector('div');
        target.style.color = 'red';
        const newStyle = { color: 'blue' };
        target.injectCss(newStyle);
        expect(target.style.color).toBe('blue');
    });
});
