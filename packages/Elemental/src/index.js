class Elemental {

	static instance;

	constructor() {
		let instance = Elemental.instance;
		if (instance) return instance;
		instance = this;
	}
	// patch Element prototype with Elemental methods
	static eject = function () {
		let instance = Elemental.instance;
		if (!instance) {
			instance = new Elemental();
		}
		const methods = Object.getOwnPropertyNames(instance).filter((e) => e !== 'eject');

		methods.forEach(function (methodName) {
			Element.prototype[methodName] = (function ( className ) {
				instance[methodName](this, className);
			});
		})
	};

	hasClass = (element, string) => element.className.indexOf(string) >= 0;

	addClass = (element, string) => {
		if (!this.hasClass(element, string)) {
			const space = element.className.length > 0 ? ' ' : '';
			element.className += `${space}${string}`;
		}
	};
	removeClass = (element, string) => {
		element.className = element.className.replace(new RegExp('[\\s]?\\b' + string + '\\b[\\s]?',"g"),"")
	};
}

export default Elemental;

//Elemental.eject();
// var body = doc.select('body');
// body.addClass("apple");
//const E = new Elemental();
// E.addClass(element, className);


