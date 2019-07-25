// CODE here for your Lambda Classes

//First we need a Person class. This will be our `base-class`

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student} receives a perfect score on ${subject}`);
  }
}

class Students extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }

  listsSubjects() {
    console.log(`${this.favSubjects}`);
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to @${channel}, standy times!​​​​​`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student}'s code on ${subject}`);
  }
}

const instructorOne = new Instructor({
  name: 'Barry',
  age: '40',
  location: 'california',
  specialty: 'Redux',
  favLanguage: 'Javascript',
  catchPhrase: 'lets git it started'
});
const instructorTwo = new Instructor({
  name: 'Henry',
  age: '23',
  location: 'Chicago',
  specialty: 'Web API',
  favLanguage: 'Java',
  catchPhrase: 'Is it lunch yet'
});
const instructorThree = new Instructor({
  name: 'Samantha',
  age: '33',
  location: 'New York',
  specialty: 'React',
  favLanguage: 'JavaScript',
  catchPhrase: 'I know my code'
});

const studentOne = new Students({
  name: 'Kat',
  age: '18',
  location: 'New York',
  previousBackground: 'student',
  className: 'Web22',
  favSubjects: ['Html', 'CSS', 'JavaScript']
});

const studentTwo = new Students({
  name: 'Damon',
  age: '33',
  location: 'Las Vegas',
  previousBackground: 'Mechanic',
  className: 'Web22',
  favSubjects: ['Html', 'CSS', 'JavaScript', 'React']
});

const projectManagerOne = new ProjectManager({
  name: 'Winston',
  age: '47',
  location: 'Virginia',
  specialty: 'Java',
  favLanguage: 'Java',
  catchPhrase: 'You can do this!!',
  gradClassName: 'W213',
  favInstructor: 'Whitney'
});

const projectManagerTwo = new ProjectManager({
  name: 'Malcom',
  age: '29',
  location: 'washington',
  specialty: 'Microsoft Micro Systems',
  favLanguage: 'Python',
  catchPhrase: 'Show me the data',
  gradClassName: 'W213',
  favInstructor: 'Kenny'
});

instructorOne.demo('HTML');
instructorOne.grade('Malcom', 'JavaScript');

studentOne.listsSubjects();
studentOne.PRAssignment('Javascript');
studentOne.sprintChallenge('React');

projectManagerOne.standUp('Web22');
projectManagerTwo.debugsCode('miles', 'React');
