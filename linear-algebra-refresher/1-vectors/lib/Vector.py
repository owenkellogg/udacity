from math import sqrt

class Vector(object):
    def __init__(self, coordinates):
        try:
            if not coordinates:
                raise ValueError
            self.coordinates = tuple(coordinates)
            self.demension = len(coordinates)

        except ValueError:
            raise ValueError("The coordinates must be nonempty")

        except TypeError:
           raise TypeError("The coordinates must be an iterable")

    def __str__(self):
        return 'Vector: {}'.format(self.coordinates) 

    def __eq__(self, v):
        return self.coordinates == v.coordinates

    def add(self, vector):
      new_coordinates = []
      for i in range(len(self.coordinates)):
        new_coordinates.append(self.coordinates[i] + vector.coordinates[i])
      return Vector(new_coordinates)

    def subtract(self, vector):
      new_coordinates = []
      for i in range(len(self.coordinates)):
        new_coordinates.append(self.coordinates[i] - vector.coordinates[i])
      return Vector(new_coordinates)

    def scalar_multiply(self, scalar):
        new_coordinates = []
        for i in range(len(self.coordinates)):
            new_coordinates.append(self.coordinates[i] * scalar)
        return Vector(new_coordinates)

    def magnitude(self):
        sum = 0
        for i in range(len(self.coordinates)):
            sum += self.coordinates[i] * self.coordinates[i]
        return sqrt(sum)

    def direction(self):
        magnitude = self.magnitude()
        new_coordinates = []
        for i in range(len(self.coordinates)):
            new_coordinates.append(self.coordinates[i] / magnitude) 
        return Vector(new_coordinates)  

