import Timer from '../src/index';

describe('Reset', () => {
    it('Reset', (done) => {
        const callback = jest.fn((x, y) => y.time);
        const counter = new Timer(callback, {
            time: 5000,
        });
        counter.start();
        setTimeout(() => {
            counter.stop();
            counter.reset();
            expect(counter.time).toBe(5000);
            done();
            // +30ms threshold to test all [times] async calls
        }, 3030);
    });
});
