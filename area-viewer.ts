import { IAreaCalculator } from "./area-calculator.interface";
import { Shape } from "./shapes/shape";

export class AreaViewer {
  constructor(private areaCalculator: IAreaCalculator) {}
  json(shapes: Shape[]) {
    console.log({ area: this.areaCalculator.calculate(shapes) });
  }

  csv(shapes: Shape[]) {
    console.log(`area, ${this.areaCalculator.calculate(shapes)}`);
  }
}
