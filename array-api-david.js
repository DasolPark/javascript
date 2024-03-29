// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.join());
}

// Q2. make an array out of a string
{
  const fruits = '🍕, 🍔, 🍟, 🌭';
  console.log(fruits.split(', '));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.slice(2));
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const foundStudent = students.find(student => student.score === 90);
  console.log(foundStudent);
}

// Q6. make an array of enrolled students
{
  const filteredStudents = students.filter(student => student.enrolled);
  console.log(filteredStudents);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const mapedScores = students.map((student) => student.score);
  console.log(mapedScores);
}

// Q8. check if there is a student with the score lower than 50
{
  const hasScoreLowerThan50 = students.some(student => student.score < 50);
  console.log(hasScoreLowerThan50);
}

// Q9. compute students' average score
{
  const avgScore = students.reduce((acc, student) => acc += student.score, 0) / students.length;
  console.log(avgScore);
}

// Q10. make a string containing all the scores
// result shold be: '45, 80, 90, 66, 88'
{
  const stringScore = students.map((student) => student.score);
  console.log(stringScore.join(', '));
}

// Bonus! do Q10 sorted in ascending order
// result sholud be: '45, 66, 80, 88, 90'
{
  const stringScore = students.map((student) => student.score).sort();
  console.log(stringScore.join(', '));
}