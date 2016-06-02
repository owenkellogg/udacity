
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

