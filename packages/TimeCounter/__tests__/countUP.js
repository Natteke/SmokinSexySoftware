// const TimeCounter = require('../dist/TimeCounter');
//
// describe('CountUp', () => {
// 	it('default params ', done => {
// 		const callback = jest.fn(( x, y ) => y.time);
// 		const counter = new TimeCounter(callback);
// 		const callbackCallsTimes = 3;
// 		const defaultTickValue = counter.tick;
// 		setTimeout(() => {
// 			const { results } = callback.mock;
// 			const lastResult = results[results.length - 1];
// 			// callback called [callbackCallsTimes] times
// 			expect(results.length).toBe(callbackCallsTimes);
// 			// time counted for [callbackCallsTimes - 1] tics
// 			expect(lastResult.value)
// 				.toBe(( callbackCallsTimes - 1 ) * defaultTickValue);
// 			done();
// 		}, callbackCallsTimes * defaultTickValue);
// 	});
// });

const TimeCounter = require('../dist/TimeCounter');

describe('CountUp', () => {
	it('3 sec', done => {
		const callback = jest.fn(( x, y ) => y.time);
		const times = 3;
		const callsTotal = times + 1; // 1 sync, and [times] async calls
		const counter = new TimeCounter(callback);
		const tick = counter.tick;
		const actualTime = times * tick;


		setTimeout(() => {
			const { results } = callback.mock;
			// take last callback
			const lastResult = results[results.length - 1];
			// callback called [callsTotal] times
			expect(results.length).toBe(callsTotal);
			// time count for [times - 1] tics
			expect(lastResult.value).toBe(actualTime);
			done();
			// +30ms threshold to test all [times] async calls
		}, actualTime + 30);
	});
});