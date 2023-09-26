function parseCount(str) {
	let result = Number.parseFloat(str);

	if (isNaN(result)) {
		throw new Error("Невалидное значение");
	}

	return result;
}

function validateCount(str) {
	try {
		let validateResult = parseCount(str);
		return validateResult;

	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (((a + b) < c) || ((b + c) < a) || ((a + c) < b)) {
			throw new Error("Треугольник с такими сторонами не существует");
		}

		this.a = a,
			this.b = b,
			this.c = c
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const halfPerimeter = this.perimeter / 2;
		let area = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
		return +area.toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);

	} catch {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},

			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}