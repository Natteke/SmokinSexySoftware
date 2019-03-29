import Elemental from '../src/index';


describe('should remove class',() => {

	it('remove single class', function () {
		document.body.innerHTML = '<div class="element"></div>';
		const target = document.querySelector('div');
		Elemental.removeClass(target, 'element');
		expect(target.className).toBe('');
	});

	it('remove single class with space at start', function () {
		document.body.innerHTML = '<div class=" element"></div>';
		const target = document.querySelector('div');
		Elemental.removeClass(target, 'element');
		expect(target.className).toBe('');
	});

	it('remove from start', function () {
		document.body.innerHTML = `<div class="element element_valid element-reverted"></div>`;
		const target = document.querySelector('div');
		Elemental.removeClass(target, 'element');
		// TODO: get rid of space at start
		expect(target.className).toBe(' element_valid element-reverted');
	});

	it('remove from center', function () {
		console.dir('start remove center');

		document.body.innerHTML = `<div class="element_valid element element-reverted"></div>`;
		const target = document.querySelector('div');
		Elemental.removeClass(target, 'element');
		expect(target.className).toBe('element_valid element-reverted');
	});

	it('remove from end', function () {
		document.body.innerHTML = `<div class="element_valid element-reverted element"></div>`;
		const target = document.querySelector('div');
		Elemental.removeClass(target, 'element');
		expect(target.className).toBe('element_valid element-reverted');
	});

	it('$tag', () => {
		const name = 'element';
		const className = `$${name}`;
		document.body.innerHTML = `<div class="${className}"></div>`;
		const target = document.querySelector('div');
		Elemental.removeClass(target, name);
		expect(target.className).toBe(className);
	});

	it('tag$', () => {
		const name = 'element';
		const className = `${name}$`;
		document.body.innerHTML = `<div class="${className}"></div>`;
		const target = document.querySelector('div');
		Elemental.removeClass(target, name);
		expect(target.className).toBe(className);
	});

	it('[subtag]tag', () => {
		const name = 'element';
		const className = `[subtag]${name}`;
		document.body.innerHTML = `<div class="${className}"></div>`;
		const target = document.querySelector('div');
		Elemental.removeClass(target, name);
		expect(target.className).toBe(className);
	});

	it('tag[subtag]', () => {
		const name = 'element';
		const className = `${name}[subtag]`;
		document.body.innerHTML = `<div class="${className}"></div>`;
		const target = document.querySelector('div');
		Elemental.removeClass(target, name);
		expect(target.className).toBe(className);
	});

	it('tag+', () => {
		const name = 'element';
		const className = `${name}+`;
		document.body.innerHTML = `<div class="${className}"></div>`;
		const target = document.querySelector('div');
		Elemental.removeClass(target, name);
		expect(target.className).toBe(className);
	});

	it('+tag', () => {
		const name = 'element';
		const className = `+${name}`;
		document.body.innerHTML = `<div class="${className}"></div>`;
		const target = document.querySelector('div');
		Elemental.removeClass(target, name);
		expect(target.className).toBe(className);
	});

	it('tag-', () => {
		const name = 'element';
		const className = `${name}-`;
		document.body.innerHTML = `<div class="${className}"></div>`;
		const target = document.querySelector('div');
		Elemental.removeClass(target, name);
		expect(target.className).toBe(className);
	});

	it('-[subtag]', () => {
		const name = 'element';
		const className = `-${name}`;
		document.body.innerHTML = `<div class="${className}"></div>`;
		const target = document.querySelector('div');
		Elemental.removeClass(target, name);
		expect(target.className).toBe(className);
	});

	it('multiple same', () => {
		const name = 'element';
		const className = `${name}`;
		document.body.innerHTML = `<div class="${className} ${className} ${className}"></div>`;
		const target = document.querySelector('div');
		Elemental.removeClass(target, name);
		expect(target.className).toBe('');
	});


});

// cases:
// apple
//  apple
// apple apple2 apple3
// apple1 apple apple2
// apple1 apple2 apple
//
// wapple-test-wapple test-apple wapple-test-wapple