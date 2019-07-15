import Timer from '../src/index';


describe('Stringify', () => {
    it('Case 90 485 000', () => {
        const time = Timer.convert(90485000);
        const date = Timer.stringify(time);
        expect(date)
            .toEqual({
                DAY: '01', HOUR: '01', MIN: '08', SEC: '05', MS: '00',
            });
    });
    it('Case 2 000 500 000', () => {
        const time = Timer.convert(2000500000, Timer.duration.HOUR);
        const date = Timer.stringify(time);
        expect(date)
            .toEqual({
                DAY: '00', HOUR: '555', MIN: '41', SEC: '40', MS: '00',
            });
    });
});
