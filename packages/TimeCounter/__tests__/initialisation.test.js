import TimeCounter from '../src/index';


describe('Initialisation', () => {

    it('Initial callback call', (done) => {
        const callback = jest.fn(null);
        const counter = new TimeCounter(callback);
        counter.stop();
        expect(callback.mock.calls.length)
            .toBe(1);
        done();
    });

    it('default state', (done) => {
        const callback = jest.fn(null);
        const counter = new TimeCounter(callback);
        expect(counter.tick).toBe(1000);
        expect(counter.time).toBe(0);
        expect(counter.addLeadingZeros).toBe(false);
        expect(counter.endBreakpoint).toBe('days');
        expect(counter.interval).toBe(setTimeout(() => {
        }) - 1);
        expect(counter.breakpoints).toEqual({
            days: 86400000,
            hours: 3600000,
            min: 60000,
            ms: 1,
            sec: 1000,
        });
        done();
    });

    it('throw error if no callback was provided', () => {
        const counter = new TimeCounter();
        expect(() => {
            throw new Error();
        }).toThrow();
        counter.stop();
    });
});