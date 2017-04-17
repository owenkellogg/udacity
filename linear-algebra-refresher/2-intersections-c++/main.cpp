#include "./lib/Vector.cpp"
#include <iostream>
#include <vector>

using namespace std;

int main() {

  Vector vector1 = Vector(vector<double> {1, 2, 3});
  Vector vector2 = Vector(vector<double> {4, 5, 6});

  Vector vector3 = vector1.minus(vector2);
  Vector vector4 = vector1.plus(vector2);

  vector3.print();
  vector4.print();
};

