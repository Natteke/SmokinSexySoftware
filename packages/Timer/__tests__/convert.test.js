import Timer from '../src/index';

describe('Time convertation', () => {
    it('Case Seconds / 500 000', () => {
        const parseTime = jest.fn(x => x);
        const counter = new Timer(parseTime, {
            time: 500000,
            breakOn: Timer.duration.SEC,
        });
        counter.start();
        expect(parseTime.mock.results[0].value)
            .toEqual({
                DAY: 0, HOUR: 0, MIN: 0, SEC: 500, MS: 0,
            });
        counter.stop();
    });

    it('Case Minutes / 2 000 500 000', () => {
        const parseTime = jest.fn(x => x);
        const counter = new Timer(parseTime, {
            time: 2000500000,
            breakOn: Timer.duration.MIN,
        });
        counter.start();
        expect(parseTime.mock.results[0].value)
            .toEqual({
                DAY: 0, HOUR: 0, MIN: 33341, SEC: 40, MS: 0,
            });
        counter.stop();
    });

    it('Case Hours / 2 000 500 000', () => {
        const parseTime = jest.fn(x => x);
        const counter = new Timer(parseTime, {
            time: 2000500000,
            breakOn: Timer.duration.HOUR,
        });
        counter.start();
        expect(parseTime.mock.results[0].value)
            .toEqual({
                DAY: 0, HOUR: 555, MIN: 41, SEC: 40, MS: 0,
            });
        counter.stop();
    });
    it('Case -10000', () => {
        const parseTime = jest.fn(x => x);
        const counter = new Timer(parseTime, {
            time: -10000,
        });
        counter.start();
        expect(parseTime.mock.results[0].value)
            .toEqual({
                // because.. c'mon.. negative time?
                DAY: 0, HOUR: 0, MIN: 0, SEC: 0, MS: 0,
            });
        counter.stop();
    });

    it('Case 50 000', () => {
        const parseTime = jest.fn(x => x);
        const counter = new Timer(parseTime, {
            time: 50000,
        });
        counter.start();
        expect(parseTime.mock.results[0].value)
            .toEqual({
                DAY: 0, HOUR: 0, MIN: 0, SEC: 50, MS: 0,
            });
        counter.stop();
    });

    it('Case 500 000', () => {
        const parseTime = jest.fn(x => x);
        const counter = new Timer(parseTime, {
            time: 500000,
        });
        counter.start();
        expect(parseTime.mock.results[0].value)
            .toEqual({
                DAY: 0, HOUR: 0, MIN: 8, SEC: 20, MS: 0,
            });
        counter.stop();
    });

    it('Case 5 184 025 000', () => {
        const parseTime = jest.fn(x => x);
        const counter = new Timer(parseTime, {
            time: 5184025000,
        });
        counter.start();
        expect(parseTime.mock.results[0].value)
            .toEqual({
                DAY: 60, HOUR: 0, MIN: 0, SEC: 25, MS: 0,
            });
        counter.stop();
    });


    it('Case 2 000 500 000', () => {
        const parseTime = jest.fn(x => x);
        const counter = new Timer(parseTime, {
            time: 2000500000,
        });
        counter.start();
        expect(parseTime.mock.results[0].value)
            .toEqual({
                DAY: 23, HOUR: 3, MIN: 41, SEC: 40, MS: 0,
            });
        counter.stop();
    });

    it('Case 3 000 600 000', () => {
        const parseTime = jest.fn(x => x);
        const counter = new Timer(parseTime, {
            time: 3000600000,
        });
        counter.start();
        expect(parseTime.mock.results[0].value)
            .toEqual({
                DAY: 34, HOUR: 17, MIN: 30, SEC: 0, MS: 0,
            });
        counter.stop();
    });

    it('Case 3 000 600 005', () => {
        const parseTime = jest.fn(x => x);
        const counter = new Timer(parseTime, {
            time: 3000600005,
        });
        counter.start();
        expect(parseTime.mock.results[0].value)
            .toEqual({
                DAY: 34, HOUR: 17, MIN: 30, SEC: 0, MS: 5,
            });
        counter.stop();
    });
});
