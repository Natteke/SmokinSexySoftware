const TimeCounter = require('../dev/TimeCounter.test');


test('Countdown', done => {
	const callback = jest.fn(( x, y ) => y.time);
	const callbackCallsTimes = 3;
	const startTimeSeconds = 10;
	new TimeCounter(callback, {
		time: startTimeSeconds * 1000,
		tick: -1000,
	});
	setTimeout(() => {
		const { results } = callback.mock;
		const lastResult = results[ results.length - 1 ];
		// проверяем что коллбек вызывался [callbackCallsTimes] раз
		expect(results.length).toBe(callbackCallsTimes);
		// проверяем что время посчитано за [callbackCallsTimes - 1] тиков интервала
		expect(lastResult.value)
			.toBe(( startTimeSeconds - ( callbackCallsTimes - 1 ) ) * 1000);
		done();
	}, callbackCallsTimes * 1000);
});