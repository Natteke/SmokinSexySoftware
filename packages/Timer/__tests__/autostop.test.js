import Timer from '../src/index';

describe('Autostop', () => {
    it('Stop when counter reach 0 with callback', (done) => {
        const callback = jest.fn((x, y) => y);
        const stopCallback = jest.fn((x, y) => y);
        const tick = 1000;
        const time = 2000;
        const times = 3;

        const counter = new Timer(callback, {
            time,
            tick: tick * -1,
            onStop: stopCallback,
        });
        counter.start();

        setTimeout(() => {
            expect(callback.mock.calls.length)
                .toBe(times);
            expect(stopCallback.mock.calls.length)
                .toBe(1);
            done();
            // +30ms threshold to test all [times] async calls
        }, time + 30);
    });

    it('Stop when counter reach 0 NO callback', (done) => {
        const callback = jest.fn((x, y) => y);
        const tick = 1000;
        const time = 2000;
        const times = 3;

        const counter = new Timer(callback, {
            time,
            tick: tick * -1,
        });
        counter.start();

        setTimeout(() => {
            expect(callback.mock.calls.length)
                .toBe(times);
            done();
            // +30ms threshold to test all [times] async calls
        }, time + 30);
    });
});
