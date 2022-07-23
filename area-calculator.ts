import { IAreaCalculator } from "./area-calculator.interface";
import { Shape } from "./shapes/shape";

export class AreaCalculator implements IAreaCalculator {
  calculate(shapes: Shape[]) {
    return Math.round(shapes.reduce((sum, shape) => sum + shape.area(), 0));
  }
}
