const TimeCounter = require('../dist/TimeCounter');


test('interval starts', done => {
	const callback = jest.fn(( x, y ) => y);
	new TimeCounter(callback);
	setTimeout(() => {
		expect(callback.mock.calls.length)
			.toBe(2);
		done();
	}, 1000);
});