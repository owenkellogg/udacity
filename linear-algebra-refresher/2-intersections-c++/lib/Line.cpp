#pragma once
#include "Line.h"
#include "Vector"
#include <iostream>

Line::Line(Vector direction, Vector basepoint) {
  this->mDirection = direction;
  this->mBasepoint = basepoint;
};

bool Line::isParallel(Line line) {

  // compute normal vectors
  // lines are parallel if normal vectors are parallel

  return true;
}

bool Line::isEqual(Line line) {
  return true;
}

Vector Line::intersect(Line line) {
  return Vector();
}

