#include "./lib/Vector.cpp"
#include "./lib/Line.cpp"
#include <iostream>
#include <vector>

using namespace std;

void quiz4() {

  Vector v1 { vector<double> {1, 2, 3} };
  Vector v2 { vector<double> {4, 5, 6} };

  Vector v3 = Vector(vector<double> {1, 0, 1});
  Vector v4 = Vector(vector<double> {4, 3, 6});

  Line line1 = Line(v1, v2);
  Line line2 = Line(v3, v4);

  bool isParallel = line1.isParallel(line2);
  bool isEqual = line1.isParallel(line2);

  Vector intersection = line1.intersect(line2);
};

void vectorPlay() {
  Vector vector1 = Vector(vector<double> {1, 2, 3});
  Vector vector2 = Vector(vector<double> {4, 5, 6});

  Vector vector3 = vector1.minus(vector2);
  Vector vector4 = vector1.plus(vector2);

  vector3.print();
  vector4.print();
}

int main() {

  quiz4();
};

