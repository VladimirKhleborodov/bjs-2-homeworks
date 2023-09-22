//Задание 1 и 2

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(number) {
		this._state = number;

		if (number < 0) {
			this._state = 0;
		};

		if (number > 100) {
			this._state = 100;
		};
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}

	giveBookByName(bookName) {
		let book = this.findBookBy('name', bookName);
		if (book) {
			this.books.splice(this.books.indexOf(book), 1);
			return book;
		}

		return null;
	}
}

//Тестовый сценарий

let library = new Library('Библиотека для молодежи');

library.addBook(
	new Book(
		'Андрей Курпатов',
		'Счастлив по собственному желанию',
		2022,
		512
	)
);

library.addBook(
	new NovelBook(
		'Джером Сэлинджер',
		'Над пропастью во ржи',
		1951,
		272
	)
);

library.addBook(
	new NovelBook(
		'Герман Гессе',
		'Демиан',
		1919,
		256
	)
);

library.addBook(
	new FantasticBook(
		"Александр Дюма",
		"Граф Монте-Кристо",
		1844,
		1248
	)
);

console.log(library.findBookBy("releaseDate", 1919).name);

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
let bookIssuedByLibrary = library.giveBookByName("Демиан");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

bookIssuedByLibrary.state = 80;

bookIssuedByLibrary.fix();

library.addBook(bookIssuedByLibrary);

//Задание 3

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subjectName) {
		if (typeof mark !== 'number' && typeof subjectName !== 'string') {
			return console.log('неверный формат данных');
		}

		if (typeof mark !== 'number') {
			return console.log('неверный формат оценки');
		}

		if (typeof subjectName !== 'string') {
			return console.log('неверный формат предмета');
		}

		if (!(2 <= mark && mark <= 5)) {
			return this.marks;
		}

		if (!this.marks.hasOwnProperty(subjectName)) {
			this.marks[subjectName] = [];
		}

		if ((2 <= mark && mark <= 5) && this.marks.hasOwnProperty(subjectName)) {
			this.marks[subjectName].push(mark);
		}
	}

	getAverageBySubject(subjectName) {
		if (typeof subjectName !== 'string') {
			return console.log('неверный формат предмета');
		}

		if (!this.marks[subjectName]) return 0;

		let marksSummaryBySubject = this.marks[subjectName].reduce((accumulator, mark) => accumulator + mark, 0);
		let averageBySubject = marksSummaryBySubject / this.marks[subjectName].length;
		return averageBySubject;
	}

	getAverage() {
		let allSubjectNames = Object.keys(this.marks);

		if (allSubjectNames.length === 0) return 0;

		allSubjectNames.forEach(subjectName => {
			if (typeof subjectName !== 'string') {
				return console.log('неверный формат предмета');
			}
		});

		let averageMarksSummary = allSubjectNames.reduce((accumulator, subjectName) => accumulator + this.getAverageBySubject(subjectName), 0);
		let average = averageMarksSummary / allSubjectNames.length;
		return average;
	}
}