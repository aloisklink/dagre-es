import { intersectEllipse } from './intersect-ellipse';

export { intersectCircle };

function intersectCircle(node, rx, point) {
  return intersectEllipse(node, rx, rx, point);
}
