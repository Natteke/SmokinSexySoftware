import Elemental from '../src/index';

describe('Add Class', () => {
    const html = '<div></div>';
    it('should add class', () => {
        document.body.innerHTML = html;
        const target = document.querySelector('div');
        Elemental.addClass(target, 'apple');
        expect(target.className).toBe('apple');
    });

    it('should add 2 classes', () => {
        document.body.innerHTML = html;
        const target = document.querySelector('div');
        Elemental.addClass(target, 'apple1');
        Elemental.addClass(target, 'apple2');
        expect(target.className).toBe('apple1 apple2');
    });

    it('should add 3 classes', () => {
        document.body.innerHTML = html;
        const target = document.querySelector('div');
        Elemental.addClass(target, 'apple1');
        Elemental.addClass(target, 'apple2');
        Elemental.addClass(target, 'apple3');
        expect(target.className).toBe('apple1 apple2 apple3');
    });

    it('should NOT add class second time', () => {
        document.body.innerHTML = html;
        const target = document.querySelector('div');
        Elemental.addClass(target, 'apple1');
        Elemental.addClass(target, 'apple1');
        expect(target.className).toBe('apple1');
    });
});
