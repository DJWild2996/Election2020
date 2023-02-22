import unittest
from Vote_Server import app
import json


class BasicTests(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()

    def test_GETOK(self):
        result = self.app.get()
        # print(result)
        self.assertEqual(result.status, '200 OK')

    def test_GET_data(self):
        result = self.app.get()
        data = json.loads(result.get_data(as_text=True))
        print(len(data), data[0], data[1])
        self.assertEqual(len(data), 2)

    def test_POST(self):
        client = app.test_client()
        result = client.post('/', data=dict(candidate='GREENSLADE, Roger',
                                            party='ACT New Zealand'))
        print(result)
        self.assertEqual(result.get_data(as_text=True), 'GOT IT')


if __name__ == '__main__':
    unittest.main()


