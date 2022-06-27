import { CoolPerson } from './person';

export function promote() {};

export default class Teacher extends CoolPerson {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}