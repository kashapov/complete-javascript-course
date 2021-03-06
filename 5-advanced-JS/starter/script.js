// function constructor
/*var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};*/
/*
var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  //this.lastName = 'Smith';
  //this.calculateAge = function() {
  //  console.log(2018 - this.yearOfBirth);
  //};
}

Person.prototype.calculateAge = function () {
  console.log(2018 - this.yearOfBirth);
};
Person.prototype.lastName = 'Smith';


var john = new Person('John', 1983, 'teacher');
var jane = new Person('Jane', 1986, 'worker');

john.calculateAge();
jane.calculateAge();
*/

// Object.create
/*
var personProto = {
  calculateAge: function () {
    console.log(2018 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer' }
});
*/

// Primitives vs objects
/*
// primitives
var a = 23;
var b = a;
a = 46;
console.log(a, b);


// objects
var obj1 = {
  name: 'John',
  age: 28
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age, obj2.age);

// functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change (a, b) {
  a = 30;
  b.city = 'San Francisco';  
}

change(age, obj);

console.log(age, obj.city);
*/

// Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }

  return arrRes;
}


function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/

// Functions returning functions
/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', can you expalin what UX design is?');
    }
  } else if (job === 'teacher') {
    return function (name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function (name) {
      console.log('Hello, ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');

interviewQuestion('teacher')('Mark');
*/

//
/*
(function () {

  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer!');
    }
  }

  var q1 = new Question(
    "Is JavaScript the colest programming language in the world?",
    ["Yes", "No"],
    0
  );

  var q2 = new Question(
    "What is the name of this courses teacher",
    ["John", "Jonas", "Michel"],
    1
  );

  var q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tedious"],
    2
  );

  var questions = [q1, q2, q3];

  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  var answer = parseInt(prompt('Please select the correct answer.'));

  questions[n].checkAnswer(answer);
})();
*/


(function () {

  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function (ans, callback) {
    var sc;

    if (ans === this.correct) {
      console.log('Correct answer!');
      sc = callback(true);
    } else {
      console.log('Wrong answer!');
      sc = callback(false);
    }

    this.displayScore(sc);
  }

  Question.prototype.displayScore = function (score) {
    console.log('Your current score is: ' + score);
    console.log('---------------------------------');
  }

  var q1 = new Question(
    "Is JavaScript the colest programming language in the world?",
    ["Yes", "No"],
    0
  );

  var q2 = new Question(
    "What is the name of this courses teacher",
    ["John", "Jonas", "Michel"],
    1
  );

  var q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tedious"],
    2
  );

  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;

    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    }
  }

  var keepScore = score();

  function nextQuestions() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer.');

    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);

      nextQuestions();
    }

  }

  nextQuestions();

})();


