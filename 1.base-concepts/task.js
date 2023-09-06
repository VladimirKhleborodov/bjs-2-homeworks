"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let d = b ** 2 - (4 * a * c);

	if (d === 0) {
		arr.push(-b / (2 * a));
	}

	if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if ((typeof percent === 'string' || typeof percent === 'number') &&
		(typeof contribution === 'string' || typeof contribution === 'number') &&
		(typeof amount === 'string' || typeof amount === 'number') &&
		(typeof countMonths === 'string' || typeof countMonths === 'number')) {
		percent = parseFloat(percent);
		contribution = parseFloat(contribution);
		amount = parseFloat(amount);
		countMonths = parseInt(countMonths);
	} else {
		return false;
	}

	let p = percent / 100 / 12;
	let s = amount - contribution;
	let n = countMonths;

	let monthlyPayment = s * (p + (p / (Math.pow(1 + p, n) - 1)));

	let totalPayment = (monthlyPayment * countMonths).toFixed(2);
	return +totalPayment;
}