function Student(name, gender, age) {
	this.name = name,
		this.gender = gender,
		this.age = age,
		this.marks = []
}

let student1 = new Student("Василиса", "женский", 19);

let student2 = new Student("Владимир", "мужской", 33);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (this.hasOwnProperty('marks')) {
		this.marks.push(...marksToAdd);
	}
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty('marks') === false || this.marks.length === 0) return 0;

	return this.marks.reduce((accumulator, mark) => accumulator + mark / this.marks.length, 0);
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}