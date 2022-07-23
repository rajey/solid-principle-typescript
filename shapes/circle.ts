import { Shape } from "./shape";

export class Circle implements Shape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
