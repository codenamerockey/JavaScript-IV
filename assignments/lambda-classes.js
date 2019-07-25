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
    console.log(`'Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
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
    return `${this.favSubjects.forEach(subject => {
      console.log(subject);
    })}`;
  }

  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge() {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
  }
}
