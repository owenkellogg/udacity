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

  multiply(n) {
    let data = this.data.map(d => {
      return d * n;
    });
    return new Vector(data);
  }

  direction() {
    // return the unit vector
    let unitVector = this.divide(this.magnitude());

    return unitVector;
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
}

module.exports = Vector;

