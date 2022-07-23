import { Shape } from "./shape";
import { ThreeDShape } from "./three-d-shape";

export class Cube implements Shape, ThreeDShape {
  area(): number {
    return 100;
  }

  volume(): number {
    return 300;
  }
}
