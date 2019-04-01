import Timer from '../src/index';


describe('Stringify', () => {
    it('Case 90 485 000', () => {
        const parseTime = jest.fn(x => x);
        const counter = new Timer(parseTime, {
            time: 90485000,
            addLeadingZeros: true,
        });
        expect(parseTime.mock.results[0].value)
            .toEqual({
                days: '01', hours: '01', min: '08', sec: '05', ms: '00',
            });
        counter.stop();
    });
    it('Case 2 000 500 000', () => {
        const parseTime = jest.fn(x => x);
        const counter = new Timer(parseTime, {
            time: 2000500000,
            endBreakpoint: 'hours',
            addLeadingZeros: true,
        });
        expect(parseTime.mock.results[0].value)
            .toEqual({
                days: '00', hours: '555', min: '41', sec: '40', ms: '00',
            });
        counter.stop();
    });
});