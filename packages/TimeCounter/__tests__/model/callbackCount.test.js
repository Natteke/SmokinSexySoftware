const TimeCounter = require('../../dist/TimeCounter');


test('Callback summons count ', done => {
	const callback = jest.fn(( x, y ) => y.time);
	const callbackCallsTimes = 3;
	new TimeCounter(callback);
	setTimeout(() => {
		const { results } = callback.mock;
		const lastResult = results[ results.length - 1 ];
		// проверяем что коллбек вызывался [callbackCallsTimes] раз
		expect(results.length).toBe(callbackCallsTimes);
		// проверяем что время посчитано за [callbackCallsTimes - 1] тиков интервала
		expect(lastResult.value)
			.toBe(( callbackCallsTimes - 1 ) * 1000);
		done();
	}, callbackCallsTimes * 1000);
});