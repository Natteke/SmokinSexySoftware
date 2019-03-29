import Elemental from '../src/index';


describe('Has Class',() => {

	const html = `<div class="apple1 apple2 apple-test-apple apple3"></div>`;

	it('Case 1', function () {
		document.body.innerHTML = html;
		const target = document.querySelector('div');
		const hasClass = Elemental.hasClass(target, 'apple1');
		expect(hasClass).toBe(true);
	});

	it('Case 2', function () {
		document.body.innerHTML = html;
		const target = document.querySelector('div');
		const hasClass = Elemental.hasClass(target, 'apple2');
		expect(hasClass).toBe(true);
	});

	it('Case 3', function () {
		document.body.innerHTML = html;
		const target = document.querySelector('div');
		const hasClass = Elemental.hasClass(target, 'apple3');
		expect(hasClass).toBe(true);
	});

	it('Case 4', function () {
		document.body.innerHTML = html;
		const target = document.querySelector('div');
		const hasClass = Elemental.hasClass(target, 'appleWrong');
		expect(hasClass).toBe(false);
	});

	it('Case 5', function () {
		document.body.innerHTML = html;
		const target = document.querySelector('div');
		const hasClass = Elemental.hasClass(target, 'apple');
		expect(hasClass).toBe(false);
	});




});