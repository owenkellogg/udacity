const Vector = require('../lib/Vector');
const assert = require('assert');

describe("Vector", () => {

  describe("Dot Product", () => {

    describe("Inner Product of Vector Length 2", () => {

      it("vector#dotProdcut(vector) should return a number", () => {

        let vector1 = new Vector([7.887, 4.138]);
        let vector2 = new Vector([-8.802, 6.776]);

        let dotProduct = vector1.dotProduct(vector2);
        assert.strictEqual(dotProduct, -41.382286);
        
      });

    });

    describe("Inner Product of Vector Length 3", () => {

      it("vector#dotProdcut(vector) should return a number", () => {

        let vector1 = new Vector([-5.995, -4.904, -1.874]);
        let vector2 = new Vector([-4.496, -8.755, 7.103]);

        let dotProduct = vector1.dotProduct(vector2);

        assert.strictEqual(dotProduct, 56.577018);
      });

    });

    describe("Computing Angle Between Two Vectors", () => {

      it("vector#angleDegrees(vector) should compute the angle in degrees", () => {

        let vector1 = new Vector([7.35, 0.221, 5.188]);
        let vector2 = new Vector([2.751, 8.259, 3.985]);

        let degrees = vector1.angleDegrees(vector2);

        assert.strictEqual(degrees, 60.27581);
      });
      
      it("vector#angleRadians(vector) should compute the angle in radians", () => {

        let vector1 = new Vector([3.183, -7.627]);
        let vector2 = new Vector([-2.668, 5.319]);

        let radians = vector1.angleRadians(vector2);

        assert.strictEqual(radians, 3.07203);
      });

    });

  });

  describe('Magitude', () => {

    describe("Computing the magniture of a vector", () => {
      it("vector.magnitude() should yield the magnitude", () => {

        let vector = new Vector([5.995, -4.904, -1.874]);

        let magnitude = vector.magnitude();

        assert.strictEqual(magnitude, 7.968759);
      });
    });

  });

  describe("Parallelism & Orthagonality", () => {

    it("vector.isParallel(vector) should return true if parallel, false if not", () => {
      let v1 = new Vector([-7.579, -7.88]);
      let v2 = new Vector([22.737, 23.64]);

      assert(v1.isParallel(v2));

      let v3 = new Vector([-2.029, 9.97, 4.172])
      let v4 = new Vector([-9.231, -6.639, -7.245])

      assert(!v3.isParallel(v4));

      let v5 = new Vector([-2.238, -7.284, -1.214])
      let v6 = new Vector([-1.821, 1.072, -2.94])

      assert(!v5.isParallel(v6));

      let v7 = new Vector([2.118, 4.827])
      let v8 = new Vector([0, 0])

      assert(v7.isParallel(v8));
    });

    it("vector.isOrthagonal(vector) should return true if orthagonal, false if not", () => {

      let v1 = new Vector([-7.579, -7.88]);
      let v2 = new Vector([22.737, 23.64]);

      assert(!v1.isOrthagonal(v2));

      let v3 = new Vector([-2.029, 9.97, 4.172])
      let v4 = new Vector([-9.231, -6.639, -7.245])

      assert(!v3.isOrthagonal(v4));

      let v5 = new Vector([-2.328, -7.284, -1.214])
      let v6 = new Vector([-1.821, 1.072, -2.94])

      assert(v5.isOrthagonal(v6));

      let v7 = new Vector([2.118, 4.827])
      let v8 = new Vector([0, 0])

      assert(v7.isOrthagonal(v8));

    });

    describe("Projecting Vectors", () => {

      it("vector.projectOnto(vector) should return a vector", () => {

        let v1 = new Vector([3.039, 1.879]);
        let v2 = new Vector([0.825, 2.036]);

        let projection = v1.projectOnto(v2);

        assert(projection);
      });

    });

  });

});

