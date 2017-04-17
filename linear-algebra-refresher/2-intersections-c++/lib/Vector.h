#include <vector>

class Vector {


  public:
    std::vector<double> mData;
    double magnitude();
    void print();
    double angleDegrees();
    double angleRadians();
    Vector dotProduct(Vector v);
    Vector plus(Vector v);
    Vector minus(Vector v);
    Vector multiply(Vector v);
    Vector divide(Vector v);
    Vector direction();
    Vector unitVector();
    bool isEqual(Vector v);
    bool isParallel(Vector v);
    bool isOrthagonal(Vector v);

    Vector(std::vector<double> data);
};
