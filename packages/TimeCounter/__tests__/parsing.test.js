import TimeCounter from '../src/index';

describe('Time parsing', () => {
	it('Case Seconds / 500 000', () => {
		const parseTime = jest.fn(x => x);
		let counter = new TimeCounter(parseTime, {
			time: 500000,
			endBreakpoint: 'sec',
		});
		expect(parseTime.mock.results[ 0 ].value)
			.toEqual({
				days: 0, hours: 0, min: 0, sec: 500, ms: 0
			});
	});

	it('Case Minutes / 2 000 500 000', () => {
		const parseTime = jest.fn(x => x);
		let counter = new TimeCounter(parseTime, {
			time: 2000500000,
			endBreakpoint: 'min',
		});
		expect(parseTime.mock.results[ 0 ].value)
			.toEqual({
				days: 0, hours: 0, min: 33341, sec: 40, ms: 0
			});
	});

	it('Case Hours / 2 000 500 000', () => {
		const parseTime = jest.fn(x => x);
		let counter = new TimeCounter(parseTime, {
			time: 2000500000,
			endBreakpoint: 'hours'
		});
		expect(parseTime.mock.results[ 0 ].value)
			.toEqual({
				days: 0, hours: 555, min: 41, sec: 40, ms: 0
			});
	});
	it('Case -10000', () => {
		const parseTime = jest.fn(x => x);
		let counter = new TimeCounter(parseTime, {
			time: -10000,
		});
		expect(parseTime.mock.results[ 0 ].value)
			.toEqual({
				// because.. c'mon.. negative time?
				days: 0, hours: 0, min: 0, sec: 0, ms: 0
			});
	});

	it('Case 50 000', () => {
		const parseTime = jest.fn(x => x);
		let counter = new TimeCounter(parseTime, {
			time: 50000,
		});
		expect(parseTime.mock.results[ 0 ].value)
			.toEqual({
				days: 0, hours: 0, min: 0, sec: 50, ms: 0
			});
	});

	it('Case 500 000', () => {
		const parseTime = jest.fn(x => x);
		let counter = new TimeCounter(parseTime, {
			time: 500000,
		});
		expect(parseTime.mock.results[ 0 ].value)
			.toEqual({
				days: 0, hours: 0, min: 8, sec: 20, ms: 0
			});
	});

	it('Case 5 184 025 000', () => {
		const parseTime = jest.fn(x => x);
		let counter = new TimeCounter(parseTime, {
			time: 5184025000,
		});
		expect(parseTime.mock.results[ 0 ].value)
			.toEqual({
				days: 60, hours: 0, min: 0, sec: 25, ms: 0
			});
	});


	it('Case 2 000 500 000', () => {
		const parseTime = jest.fn(x => x);
		let counter = new TimeCounter(parseTime, {
			time: 2000500000,
		});
		expect(parseTime.mock.results[ 0 ].value)
			.toEqual({
				days: 23, hours: 3, min: 41, sec: 40, ms: 0
			});
	});

	it('Case 3 000 600 000', () => {
		const parseTime = jest.fn(x => x);
		let counter = new TimeCounter(parseTime, {
			time: 3000600000,
		});
		expect(parseTime.mock.results[ 0 ].value)
			.toEqual({
				days: 34, hours: 17, min: 30, sec: 0, ms: 0
			});
	});

	it('Case 3 000 600 005', () => {
		const parseTime = jest.fn(x => x);
		let counter = new TimeCounter(parseTime, {
			time: 3000600005,
		});
		expect(parseTime.mock.results[ 0 ].value)
			.toEqual({
				days: 34, hours: 17, min: 30, sec: 0, ms: 5
			});
	});
});