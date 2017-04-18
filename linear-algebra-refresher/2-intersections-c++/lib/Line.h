#pragma once
#include <vector>
#include "./Vector.cpp"

class Line {
  Vector mBasepoint;
  Vector mDirection;

  public:

    Vector intersect(Line line);
    bool isParallel(Line line);
    bool isEqual(Line line);
    Line(Vector direction, Vector basepoint);
};

