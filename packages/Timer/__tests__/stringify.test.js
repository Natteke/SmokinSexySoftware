import Timer from '../src/index';


describe('Stringify', () => {
    it('Case 90 485 000', () => {
        const time = Timer.convert(90485000);
        const date = Timer.stringify(time);
        expect(date)
            .toEqual({
                days: '01', hours: '01', min: '08', sec: '05', ms: '00',
            });
    });
    it('Case 2 000 500 000', () => {
        const time = Timer.convert(2000500000, 'hours');
        const date = Timer.stringify(time);
        expect(date)
            .toEqual({
                days: '00', hours: '555', min: '41', sec: '40', ms: '00',
            });
    });
});
