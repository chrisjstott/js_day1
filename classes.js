function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return this.owner + " loves " + this.name;
};

var markov = new Cat("Markov","Ned");

var curie = new Cat("Curie", "Ned");

var felix = new Cat("Felix", "Felix");
//
// console.log(markov.cuteStatement());
// console.log(curie.cuteStatement());
// console.log(felix.cuteStatement());
//
// Cat.prototype.cuteStatement = function() {
//   return "Everyone loves " + this.name;
// };
//
// console.log(markov.cuteStatement());
// console.log(curie.cuteStatement());
// console.log(felix.cuteStatement());
//
// Cat.prototype.meow = function() {
//   return "meow";
// };
//
// console.log(markov.meow());
// console.log(curie.meow());
// console.log(felix.meow());
//
// markov.meow = function() {
//   return "MEOW";
// };
//
// console.log(markov.meow());
// console.log(curie.meow());
// console.log(felix.meow());
function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function() {
  this.firstName +" "+ this.lastName;
};

Student.prototype.enroll = function(course) {
  for(var c=0; c<this.courses.length; c++) {
    if(course.conflictsWith(this.courses[c])){
      throw new Error("Those courses conflict");
    }
  }
  this.courses.push(course);
  course.students.push(this);
};

Student.prototype.courseLoad = function() {
  var creditHash = {};
  for(var i=0; i< this.courses.length; i++) {
    var department = this.courses[i].department;
    if(creditHash[department]){
      creditHash[department] += this.courses[i].credits;
    } else {
      creditHash[department] = this.courses[i].credits;
    }
  }
  return creditHash;
};

function Course(courseName, department, credits, days, block) {
  this.courseName = courseName;
  this.department = department;
  this.credits = credits;
  this.students = [];
  this.days = days;
  this.block = block;
}

Course.prototype.addStudent = function(student) {
  student.enroll(this);
};

Course.prototype.conflictsWith = function(otherCourse) {
  if (this.block !== otherCourse.block) {
    return false;
  } else {
    for(var i = 0; i < this.days.length; i ++){
      for(var j = 0; j < otherCourse.days.length; j++) {
        if (this.days[i] === otherCourse.days[j]) {
          return true;
        }
      }
    }
    return false;
  }
};


var me = new Student("Jacob", "Kopczynski");
var you = new Student("Chris", "Stott");

var aA = new Course("App Academy", "CS", 100, ['mon','tue','wed','thu','fri'], 1);
var life = new Course("Life", "Universe", 12, ['fri'], 1);
var physics = new Course("Physics", "Universe", 7, ['tue', 'thu'], 5);

me.enroll(aA);
me.enroll(physics);
you.enroll(aA);

//me.enroll(life);
console.log(aA.conflictsWith(life));
console.log(life.conflictsWith(aA));
console.log(aA.conflictsWith(physics));
console.log(physics.conflictsWith(aA));
