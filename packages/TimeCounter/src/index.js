class TimeCounter {
	constructor(callback, params = {}) {
		this.onTick = callback || (() => {throw Error('1st argument callback required')});
		this.time = params.time || 0;
		this.tick = params.tick || 1000;
		this.endBreakpoint = params.endBreakpoint || 'days';
		this.addLeadingZeros = params.addLeadingZeros || false;
		this.start();
	}
	// reset()
	// refactor with state pattern
	interval = null;
	breakpoints = {
		ms: 1,
		sec: 1000,
		min: 60000,
		hours: 3600000,
		days: 86400000,
	};

	date = {
		ms: 0,
		sec: 0,
		min: 0,
		hours: 0,
		days: 0,
	};
	start = () => {
		const interval = Math.abs(this.tick);
		// вызываем первый коллбек синхронно
		this.iterate();
		// запускаем итерацию по интервалу
		this.interval = setInterval(() => {
			this.time += this.tick;
			this.iterate();
		if (this.time <= 0) this.stop();
		}, interval);
	};
	iterate = () => {
		this.date = this.parseTime();
		this.response();
	};
	parseTime = () => {
		let rest = this.time + 0;
		const {breakpoints : bp} = this;
		const newDate = {
			days: 0,
			hours: 0,
			min: 0,
			sec: 0,
			ms: 0,
		};
		for (let prop in newDate) {
			if (
				rest >= bp[prop] &&
				bp[prop] <= bp[this.endBreakpoint]
			) {
				newDate[prop] = ~~(rest / bp[prop]);
				rest -= (bp[prop] * newDate[prop]);
			}
		}
		return newDate;
	};
	addZeros = date => {
		const newDate = {...date};
		Object.keys(newDate)
			.forEach(e => {
				newDate[e] = newDate[e] < 10 ? `0${newDate[e]}` : `${newDate[e]}`;
			});
		return newDate;
	};
	response = () => {
		const {date, addZeros} = this;
		const newDate = this.addLeadingZeros ? addZeros(date) : {...date};
		this.onTick(newDate, this);
	};
	stop = () => clearInterval(this.interval);
}

export default TimeCounter;