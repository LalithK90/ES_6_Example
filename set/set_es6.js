let students = new Set(['Saman', 'Kamal', 'Nimal', 'Amara']);

students.add('Anula');

console.log(students);

students.add('Anula');
students.add('Anula');
students.add('Anula');


for (student of students) {
    console.log(student)
}

console.log(students.has('Anula'));
console.log(students.delete('Anula'));
console.log(students);