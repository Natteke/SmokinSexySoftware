import TimeCounter from '../src/index';

describe('Autostop', () => {
    it('Stop when counter reach 0', done => {
        const callback = jest.fn((x, y) => y);
        const tick = 1000;
        const time = 2000;
        const times = 3;

        const counter = new TimeCounter(callback, {
            time,
            tick: tick * -1,
        });

        setTimeout(() => {
            counter.stop();
            expect(callback.mock.calls.length)
                .toBe(times);
            done();
            // +30ms threshold to test all [times] async calls
        }, time + 30);
    });
    it('throw error if no callback', () => {
        const counter = new TimeCounter();
        expect(() => {
            throw new Error();
        }).toThrow();
        counter.stop();
    });
});
