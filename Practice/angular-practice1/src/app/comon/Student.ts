import { Person } from "./Person";

//Cấu trúc của một class
//Kế thừa

export class Student extends Person {
  private gpa:number //access modifier private public protected

  constructor(name: string, age: number, gpa: number) {
    super(name, age);
    this.gpa = gpa;
  }

  public getGpa(){
    return this.gpa
  }
}
