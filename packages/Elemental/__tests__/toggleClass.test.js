import Elemental from '../src/index';

describe('Toggle Class', () => {
    const html = '<div class="element element_item element-small"></div>';

    it('toggle should add to empty', () => {
        document.body.innerHTML = '<div></div>';
        const target = document.querySelector('div');
        Elemental.toggleClass(target, 'element__core');
        expect(target.className).toBe('element__core');
    });

    it('toggle should add', () => {
        document.body.innerHTML = html;
        const target = document.querySelector('div');
        Elemental.toggleClass(target, 'element__core');
        expect(target.className).toBe('element element_item element-small element__core');
    });

    it('toggle should remove', () => {
        document.body.innerHTML = html;
        const target = document.querySelector('div');
        Elemental.toggleClass(target, 'element');
        expect(target.className).toBe('element_item element-small');
    });
});
