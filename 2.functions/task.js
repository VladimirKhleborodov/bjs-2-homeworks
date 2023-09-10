function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	min = Math.min(...arr);
	max = Math.max(...arr);
	sum = arr.reduce((accumulator, arrItem) => accumulator + arrItem, 0);
	avg = sum / arr.length;
	avg = +avg.toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;

	let sum = arr.reduce((accumulator, arrItem) => accumulator + arrItem, 0);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;

	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let differenceMaxMin = max - min;
	return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;

	let sumEvenElement = 0;
	let sumOddElement = 0;
	let differenceEvenOdd = 0;

	for (let item of arr) {
		if (item % 2 === 0) {
			sumEvenElement += item;
		} else {
			sumOddElement += item;
		}
	}

	differenceEvenOdd = sumEvenElement - sumOddElement;
	return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;

	let sumEvenElement = 0;
	let countEvenElement = 0;
	let averageEvenElements = 0;

	for (let item of arr) {
		if (item % 2 === 0) {
			sumEvenElement += item;
			countEvenElement += 1;
		}
	}

	averageEvenElements = sumEvenElement / countEvenElement;
	return averageEvenElements;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = func(...arrOfArr[0]);
	console.log(maxWorkerResult);
	let result = 0;

	for (let item of arrOfArr) {
		result = func(...item);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}