from lib.Vector import *
import unittest

class TestVector(unittest.TestCase):

    def test_add(self):

        first_vector = Vector([1,2,3])
        second_vector = Vector([2,2,3])
        third_vector = first_vector.add(second_vector)

        self.assertEqual(third_vector.coordinates[0], 3)
        self.assertEqual(third_vector.coordinates[1], 4)
        self.assertEqual(third_vector.coordinates[2], 6)

    def test_subtract(self):

        first_vector = Vector([1,2,3])
        second_vector = Vector([2,2,3])
        third_vector = first_vector.subtract(second_vector)

        self.assertEqual(third_vector.coordinates[0], -1)
        self.assertEqual(third_vector.coordinates[1], 0)
        self.assertEqual(third_vector.coordinates[2], 0)

    def test_scalar_multiply(self):
 
        original_vector = Vector([4,5,6]) 
        scalar = 2
        new_vector = original_vector.scalar_multiply(2)

        self.assertEqual(new_vector.coordinates[0], 8)
        self.assertEqual(new_vector.coordinates[1], 10)
        self.assertEqual(new_vector.coordinates[2], 12)

    def test_magnitude(self):
        
        vector1 = Vector([3,4])
        self.assertEqual(vector1.magnitude(), 5)

        vector2 = Vector([8,15])
        self.assertEqual(vector2.magnitude(), 17)

    def test_direction(self):

        vector1 = Vector([1,2,3])

        direction = vector1.direction()
        self.assertEqual(direction.coordinates[0], 0.2672612419124244)
        self.assertEqual(direction.coordinates[1], 0.5345224838248488)
        self.assertEqual(direction.coordinates[2], 0.8017837257372732)

    def test_dot_product(seld):

        vector1 = Vector([7,887, 4.138])
        vector2 = Vector([-8.802, 6.776])
        
        dot_product = vector1.dot_product(vector2)

if __name__ == '__main__':
    unittest.main()
