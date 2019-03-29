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

    it('Element addClass', () => {
        document.body.innerHTML = html;
        const target = document.querySelector(targetSelector);
        target.addClass('apple');
        expect(target.className).toBe(`${testClass} apple`);
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
});
