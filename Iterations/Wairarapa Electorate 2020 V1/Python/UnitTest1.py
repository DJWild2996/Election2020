import unittest
from electorate import Electorate


class TestStaringCatteryCode(unittest.TestCase):

    def test_a_electorate_collection(self):
        electorate = Electorate()
        self.assertTrue(hasattr(electorate, 'all_parties'))
        self.assertTrue(type(electorate.all_parties) == list)

    def test_b_cattery_add_party(self):
        electorate = Electorate()
        self.assertTrue(hasattr(electorate, 'add_party'))
        self.assertTrue(callable(getattr(electorate, 'add_party', None)))

    def test_c_cattery_sort_parties(self):
        electorate = Electorate()
        self.assertTrue(hasattr(electorate, 'sort_parties'))
        self.assertTrue(callable(getattr(electorate, 'sort_parties', None)))


if __name__ == '__main__':
    unittest.main(verbosity=3)
