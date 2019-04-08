import Elemental from '../src/index';

describe('Inject Css', () => {
    it('element has style in css object', () => {
        document.body.innerHTML = '<div></div>';
        const target = document.querySelector('div');
        target.style.color = 'red';
        const newStyle = { color: 'blue' };
        Elemental.injectCss(target, newStyle);
        expect(target.style.color).toBe('blue');
    });
});
