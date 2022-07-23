import { Shape } from "./shapes/shape";

export interface IAreaCalculator {
  calculate: (shapes: Shape[]) => number;
}
