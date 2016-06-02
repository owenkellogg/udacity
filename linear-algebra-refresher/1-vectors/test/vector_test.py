from Vector import *
import unittest

class TestVector(unittest.TestCase):

    def test_add(self):

      first_vector = Vector([1,2,3])
      second_vector = Vector([2,2,3])
      third_vector = first_vector.add(second_vector)

      self.assertEqual(third_vector.coordinates[0], 3)
      self.assertEqual(third_vector.coordinates[1], 4)
      self.assertEqual(third_vector.coordinates[2], 6)

if __name__ == '__main__':
    unittest.main()
