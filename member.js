function skillsMember() {
	var skills = [
		{ name: 'HTML', level: 5 },
		{ name: 'CSS', level: 4 },
		{ name: 'JS', level: 4 },
		{ name: 'Node', level: 3 }
	];
	var name = 'John';
	var age = 30;
	var skillsMember = {
		name: name,
		age: age,
		skills: skills,
		greet: function() {
			console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
		}
	};
	return skillsMember;
}