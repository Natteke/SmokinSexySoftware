const Elemental = {};

Elemental.regexp = string => new RegExp(`\\s?((?<!(\\w))\\s)?(?<!([-+$\\[\\]\\w]))${string}(?!([-+$\\[\\]\\w]))`);

Elemental.hasClass = (element, string) => Elemental.regexp(string).test(element.className);

Elemental.addClass = (element, string) => {
	if (!Elemental.hasClass(element, string)) {
		const space = element.className.length > 0 ? ' ' : '';
		element.className += `${space}${string}`;
	}
	return element;
};

Elemental.removeClass = (element, string) => {
	while (Elemental.hasClass(element, string)) {
		element.className = element.className.replace(Elemental.regexp(string), "")
	}
	return element;
};

// patch Element.prototype with Elemental methods
Elemental.eject = function () {
	// props we don't want to eject
	const shouldEject = ['addClass', 'removeClass', 'hasClass'];
	const methods = Object.getOwnPropertyNames(Elemental)
		.filter((e) => shouldEject.indexOf(e) >= 0);
	methods.forEach(function (methodName) {
		Element.prototype[methodName] = (function (className) {
			return Elemental[methodName](this, className);
		} );
	})
};

export default Elemental;


// (((?<!(\w))\s)?(?<!([-+$\[\]\w]))apple(?!([-+$\[\]\w]))\s?)

// apple
// apple
// apple apple2 apple3
// apple1 apple apple2
// apple1 apple2 apple
// apple2 apple
// apple2 apple
//
// wapple-test-wapple
// apple-test
// test-apple
// wapple-test-wapple
// apple[wapple]
// 	[wapple]apple
// $apple
// $apple


