// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";

import { manhattanDistance, Point } from ".";

expect.extend(matchers);

describe("Manhattan distance", () => {
  it("Distance between a point and itself is zero", () => {
    const point: Point = {
      x: 0,
      y: 0,
    };

    expect(manhattanDistance(point, point)).toEqual(0);
  });

  it("Distance between two points on same axis (e.g x axis) is the difference between the changing coordinate", () => {
    const firstPoint: Point = {
      x: 0,
      y: 1,
    };

    const secondPoint: Point = {
      x: 0,
      y: 0,
    };

    expect(manhattanDistance(firstPoint, secondPoint)).toEqual(1);
  });

  it("Distance between two points on same axis (e.g x axis) is the absolute difference between the changing coordinate", () => {
    const firstPoint: Point = {
      x: 0,
      y: 5,
    };

    const secondPoint: Point = {
      x: 0,
      y: 3,
    };

    expect(manhattanDistance(firstPoint, secondPoint)).toEqual(2);
  });

  it("Distance between two points on same axis (e.g x axis) is the absolute difference between the changing coordinate", () => {
    const firstPoint: Point = {
      x: 0,
      y: 3,
    };

    const secondPoint: Point = {
      x: 0,
      y: 5,
    };

    expect(manhattanDistance(firstPoint, secondPoint)).toEqual(2);
  });

  it("Distance between two points on same axis (e.g y axis) is the absolute difference between the changing coordinate (e.g y)", () => {
    const firstPoint: Point = {
      x: 3,
      y: 0,
    };

    const secondPoint: Point = {
      x: 5,
      y: 0,
    };

    expect(manhattanDistance(firstPoint, secondPoint)).toEqual(2);
  });

  it("Distance between two points is the sum of the distance between the two points on each axis", () => {
    const firstPoint: Point = {
      x: 1,
      y: 1,
    };

    const secondPoint: Point = {
      x: 3,
      y: 3,
    };

    expect(manhattanDistance(firstPoint, secondPoint)).toEqual(4);
  });

  it("Distance between two points is the sum of the distance between the two points on each axis (control test)", () => {
    const firstPoint: Point = {
      x: 3,
      y: 1,
    };

    const secondPoint: Point = {
      x: 3,
      y: 5,
    };

    expect(manhattanDistance(firstPoint, secondPoint)).toEqual(4);
  });
});
