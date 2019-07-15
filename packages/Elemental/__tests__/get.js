import Elemental from '../src/index';

describe('get', () => {
    const html = ''
        + '<div class="element element1"></div>'
        + '<div class="element element2"></div>'
        + '<div class="element element3"></div>'
    ;
    it('return array', () => {
        document.body.innerHTML = html;
        const arr = Elemental.get('.element1');
        expect(Array.isArray(arr)).toBe(true);
    });
    it('return all elements', () => {
        document.body.innerHTML = html;
        const arr = Elemental.get('.element');
        expect(arr.length).toBe(3);
    });
});
