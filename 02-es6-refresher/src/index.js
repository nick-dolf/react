// Modules
import Teacher, { promote } from './teacher';
import React, { Component } from 'react';

// Default -> import ... from '';
// Named -> import { ... } from '';

const teacher = new Teacher("Mosh", "MSc")

teacher.teach()

// Classes
// class CoolPerson {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log("walk")
//   }
// }

// const person = new CoolPerson('nick')

// console.log(person.name)
// person.walk()

// class Teacher extends CoolPerson {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }

//   teach() {
//     console.log("teach");
//   }
// }

// const teacher = new Teacher('john', 'master of science');
// teacher.walk()
// teacher.teach()
// console.log(teacher.degree)

// Spread operator
// const first = { name: "nick" };
// const second = { job: 'student'};

// const combined = {...first, ...second, location: 'earth'}
// console.log(combined)

// const clone = {...first}

// const first = [1, 2, 3];
// const second = [4, 5, 6]

// const combined = first.concat(second);
// console.log(combined)
// const combi = [...first, 'a', ...second, 'b'];
// console.log(combi)

// const clone = [...first]
// console.log(first)
// console.log(clone)


// Object Destrucuring
// const address = {
//   street: 'main',
//   city: 'toronto',
//   country: 'canada'
// };

// const street1 = address.street;
// const city1 = address.city;
// const country1 = address.country;

// const { street: st, city, country } = address;

// console.log(st)

// Array.map method
// const colors = ['red', 'green', 'blue'];
// const items = colors.map( color => `<li>${color}</li>`);

// console.log(items)

// Arrow functions and this
// const person = {
//   talk() {
//     var self = this;
//     setTimeout(function() {

//       console.log("self", self);
//     }, 1000);
//   },

//   talk_arrow() {
//     var self = this;
//     setTimeout(() => {
//       console.log("this", this);
//     }, 2000);
//   }
// }

// person.talk();
// person.talk_arrow();

// Arrow functions
// const square = function(number) {
//   return number * number;
// }
// console.log(square(2))

// const square_arrow = number => number * number;
// console.log(square_arrow(2))

// const jobs = [
//   {id:1 , isActive: true},
//   {id:2 , isActive: true},
//   {id:3 , isActive: false},
// ]

// // const activeJobs = jobs.filter(function(job) {return job.isActive; })
// const activeJobs = jobs.filter((job) => job.isActive)
// console.log(activeJobs);


// This keyword
// const person = {
//   name: "nick",
//   walk() {
//     console.log(this)
//   }
// }

// person.walk();

// const walk = person.walk();
// console.log(walk);

// const bindwalk = person.walk.bind(person);
// bindwalk();

// Objects
// const person = {
//   name: 'Nick',
//   walk: function() {},
//   talk() {}
// }

// person.talk();
// person.name = '';

// const targetMember = 'name';
// person[targetMember.value] = 'John';

// Let vs var vs const
// var -> function
// let -> block
// const -> block


// function sayHello() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i)
// }

// sayHello()

// const x = 1;
// x = 2;