import { AreaCalculator } from "./area-calculator";
import { IAreaCalculator } from "./area-calculator.interface";
import { AreaViewer } from "./area-viewer";
import { Circle } from "./shapes/circle";
import { Rectangle } from "./shapes/rectangle";
import { Shape } from "./shapes/shape";
import { Square } from "./shapes/square";

const shapes: Shape[] = [new Circle(5), new Square(5), new Rectangle(5, 4)];

const areaCalculator: IAreaCalculator = new AreaCalculator();
const areaViewer = new AreaViewer(areaCalculator);

areaViewer.json(shapes);
areaViewer.csv(shapes);
