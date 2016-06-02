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

if __name__ == '__main__':
    unittest.main()
