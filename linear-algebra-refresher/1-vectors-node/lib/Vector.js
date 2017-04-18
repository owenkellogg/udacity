const _ = require('lodash');

class Vector {

  constructor(data) {
    this.data = data;
  }

  magnitude() {
    let sumOfSquares = _.reduce(this.data, (sum, n) => {
      return sum + n*n;
    }, 0);

    let magnitude = Math.sqrt(sumOfSquares);

    return parseFloat(magnitude.toFixed(6));
  }

  angleDegrees(vector) {
    let dotProduct = this.dotProduct(vector);
    let magnitude1 = this.magnitude();
    let magnitude2 = vector.magnitude();

    let radians = Math.acos(dotProduct / (magnitude1 * magnitude2));

    let degrees = radians * (180 / Math.PI);

    return parseFloat(degrees.toFixed(5));
  }

  angleRadians(vector) {

    let dotProduct = this.dotProduct(vector);
    let magnitude1 = this.magnitude();
    let magnitude2 = vector.magnitude();

    let angle = Math.acos(dotProduct / (magnitude1 * magnitude2));

    return parseFloat(angle.toFixed(5));
  }

  dotProduct(vector) {
    if (vector.data.length !== this.data.length) {
      throw new Error('vectors must be same length');
    }

    var index = 0;
    var sum = _.reduce(vector.data, (sum, n) => {
      let product = n * this.data[index];
      index = index + 1;
      return sum + product;
    }, 0);

    return parseFloat(sum.toFixed(6));
  }

  plus(vector) {
    let data = _.zip(this.data, vector.data).map(pair => {
      return pair[0] + pair[1];
    });
    return new Vector(data);
  }

  minus(vector) {
    let data = _.zip(this.data, vector.data).map(pair => {
      return pair[0] - pair[1];
    });

    return new Vector(data);
  }

  divide(n) {
    let data = this.data.map(d => {
      if (n === 0) {
        return 0;
      } else {
        return d / n;
      }
    });
    return new Vector(data);
  }

  multiply(scalar) {
    let data = this.data.map(d => {
      return d * scalar;
    });
    return new Vector(data);
  }

  direction() {
    return this.unitVector();
  }

  unitVector() {
    return this.divide(this.magnitude());
  }

  equals(vector) {

    let pairs = _.zip(this.data, vector.data);

    let matchingPairs = _.filter(pairs, pair => pair[0].toFixed(5) === pair[1].toFixed(5));

    return matchingPairs.length === pairs.length;
  }

  isParallel(vector) {
    if (this.magnitude() === 0 || vector.magnitude() === 0) {

      return true;
    } else {
      return this.direction().equals(vector.direction()) || this.direction().equals(vector.direction().multiply(-1));
    }
  }

  isOrthagonal(vector) {
    return this.dotProduct(vector) === 0;
  }

  projectOnto(vector) {
    let dotProduct = this.dotProduct(vector.unitVector());
    return vector.unitVector().multiply(dotProduct);
  }

  projectComponentPerpendicular(vecto4) {
    return this.projectOnto(vector);
  }

  projectComponentParallel(vector) {
    let projection = this.projectOnto(vector);
    return this.minus(projection);
  }

  crossProduct(vector) {
    let data = [];

    let x1 = this.data[0];
    let x2 = vector.data[0];

    let y1 = this.data[1];
    let y2 = vector.data[1];

    let z1 = this.data[2];
    let z2 = vector.data[2];

    data[0] = y1*z2 - y2*z1;
    data[1] = (x1*z2 - x2*z1) * -1;
    data[2] = x1*y2 - x2*y1;

    return new Vector(data);
  }

  crossProductParallelogram(vector) {
    let crossProduct = this.crossProduct(vector);
    let length = crossProduct.magnitude();

    if (length > 0) {
      return length;
    } else {
      return length * -1;
    }
  }

  crossProductTriangle(vector) {
    return this.crossProductParallelogram(vector) / 2;
  }
}

module.exports = Vector;

