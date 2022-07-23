import { Shape } from "./shape";
export class Square implements Shape {
  length: number;
  constructor(length: number) {
    this.length = length;
  }
  area(): number {
    return Math.pow(this.length, 2);
  }
}
