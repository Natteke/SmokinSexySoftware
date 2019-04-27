import Timer from '../src/index';

describe('Initialisation', () => {
    it('Initial callback call', (done) => {
        const callback = jest.fn(null);
        const counter = new Timer(callback);
        counter.start();
        counter.stop();
        expect(callback.mock.calls.length)
            .toBe(1);
        done();
    });

    it('default state', (done) => {
        const callback = jest.fn(null);
        const counter = new Timer(callback);
        counter.start();
        expect(counter.tick).toBe(1000);
        expect(counter.breakOn).toBe('days');
        expect(counter.interval).toBe(setTimeout(() => {}) - 1);
        counter.stop();
        done();
    });

    it('throw error if no callback was provided', () => {
        expect(() => {
            const counter = new Timer();
        }).toThrow(TypeError);
    });
});
