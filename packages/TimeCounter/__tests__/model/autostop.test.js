const TimeCounter = require('../../dist/TimeCounter');

test('Stop when counter reach 0', done => {
	const callback = jest.fn(( x, y ) => y);
	new TimeCounter(callback, {
		time: 2000,
		tick: -1000,
	});

	setTimeout(() => {
		expect(callback.mock.calls.length)
			.toBe(3);
		done();
	}, 3000);
});