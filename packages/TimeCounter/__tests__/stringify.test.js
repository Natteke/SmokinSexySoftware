const TimeCounter = require('../dev/TimeCounter.test');


describe('String Conversion', () => {
	it('Case 90 485 000', () => {
		const parseTime = jest.fn(x => x);
		let counter = new TimeCounter(parseTime, {
			time: 90485000,
			addLeadingZeros: true,
		});
		expect(parseTime.mock.results[ 0 ].value)
			.toEqual({
				days: '01', hours: '01', min: '08', sec: '05', ms: '00'
			});
	});
});