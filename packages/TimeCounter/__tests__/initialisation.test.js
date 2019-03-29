const TimeCounter = require('../dist/TimeCounter');


describe('Initialisation', () => {
	it('Initial callback call', done => {
		const firstResponse = jest.fn(null);
		new TimeCounter(firstResponse);
		expect(firstResponse.mock.calls.length)
			.toBe(1);
		done();
	})
});