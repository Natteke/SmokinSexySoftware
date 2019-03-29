const TimeCounter = require('../dist/TimeCounter');
describe('Autostop', () => {
	it('Stop when counter reach 0', done => {
		const callback = jest.fn(( x, y ) => y);
		const tick = 1000;
		const time = 2000;
		const times = 3;

		new TimeCounter(callback, {
			time: time,
			tick: tick * -1,
		});

		setTimeout(() => {
			expect(callback.mock.calls.length)
				.toBe(times);
			done();
		// +30ms threshold to test all [times] async calls
		}, time + 30);
	});
});