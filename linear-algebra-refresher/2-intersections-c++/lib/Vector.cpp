#pragma once
#include "Vector.h"
#include <iostream>
#include <vector>

using namespace std;

Vector Vector::minus(Vector v) {
  int i = 0;
  vector<double> out;

  std::for_each(mData.begin(), mData.end(), [&i, &v, &out](double value) {
    out.push_back(value - v.mData[i]);
    i++;
  });

  return Vector(out);
};

Vector Vector::plus(Vector v) {
  int i = 0;
  vector<double> out;

  std::for_each(mData.begin(), mData.end(), [&i, &v, &out](double value) {
    out.push_back(v.mData[i] + value);
    i++;
  });

  return Vector(out);
};

Vector::Vector(std::vector<double> data) {
  mData = data;
};

Vector::Vector() {
  mData = std::vector<double> {0, 0, 0};
};

void Vector::print() {
  std::cout << "[ ";
  std::for_each(mData.begin(), mData.end(), [](double value) {   
    cout << value << " ";
  }); 
  std::cout << "]" << std::endl;
}

