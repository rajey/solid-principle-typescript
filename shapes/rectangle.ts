import { Shape } from "./shape";

export class Rectangle implements Shape {
  length: number;
  width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  area(): number {
    return this.length * this.width;
  }
}
