/* eslint-disable comma-dangle */
export type Point = {
  x: number;
  y: number;
};

const absoluteDiff = (coordinate1: number, coordinate2: number) => {
  return Math.abs(coordinate1 - coordinate2);
};

export const manhattanDistance = (
  { y: firstPointY, x: firstPointX }: Point,
  { x: secondPointX, y: secondPointY }: Point
): number => {
  return absoluteDiff(firstPointY, secondPointY) + absoluteDiff(firstPointX, secondPointX);
};
