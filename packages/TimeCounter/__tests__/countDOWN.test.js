const TimeCounter = require('../dist/TimeCounter');

describe('Countdown', () => {
	it('10 sec', done => {
		const callback = jest.fn(( x, y ) => y.time);
		const times = 3;
		const callsTotal = times + 1; // 1 sync, and [times] async calls
		const initialTime = 10000;
		const counter = new TimeCounter(callback, {
			time: initialTime,
			// count down
			tick: -1000,
		});
		const tick = Math.abs(counter.tick);
		const actualTime = times * tick;



		setTimeout(() => {
			const { results } = callback.mock;
			// take last callback
			const lastResult = results[results.length - 1];
			// callback called [callsTotal] times
			expect(results.length).toBe(callsTotal);
			// time count for [times - 1] tics
			expect(lastResult.value).toBe(initialTime - (actualTime));
			done();
			// +30ms threshold to test all [times] async calls
		}, actualTime + 30);
	});
});