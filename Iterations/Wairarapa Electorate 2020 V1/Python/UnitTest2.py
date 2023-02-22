import unittest
import controller


class TestAddingFourOwners(unittest.TestCase):
    def test_a_has_16_Parties(self):
        parties = controller.setup()
        self.assertEqual(len(parties.all_parties), 16)

    def test_b_parties_details(self):
        parties = controller.setup()
        party = parties.all_parties[0]
        self.assertEqual(party.name, 'ACT New Zealand')

        party = parties.all_parties[1]
        self.assertEqual(party.name, 'Aotearoa Legalise Cannabis Party')

        party = parties.all_parties[2]
        self.assertEqual(party.name, 'Ban 1080')

        party = parties.all_parties[3]
        self.assertEqual(party.name, 'Conservative')

        party = parties.all_parties[4]
        self.assertEqual(party.name, 'Democrats for Social Credit')

        party = parties.all_parties[5]
        self.assertEqual(party.name, 'Green Party')

        party = parties.all_parties[6]
        self.assertEqual(party.name, 'Internet Party')

        party = parties.all_parties[7]
        self.assertEqual(party.name, 'Labour Party')

        party = parties.all_parties[8]
        self.assertEqual(party.name, 'MANA')

        party = parties.all_parties[9]
        self.assertEqual(party.name, 'Maori Party')

        party = parties.all_parties[10]
        self.assertEqual(party.name, 'National Party')

        party = parties.all_parties[11]
        self.assertEqual(party.name, 'New Zealand First Party')

        party = parties.all_parties[12]
        self.assertEqual(party.name, 'New Zealand Peoples Party')

        party = parties.all_parties[13]
        self.assertEqual(party.name, 'NZ Outdoors Party')

        party = parties.all_parties[14]
        self.assertEqual(party.name, 'United Future')

        party = parties.all_parties[15]
        self.assertEqual(party.name, 'The Opportunities Party')




if __name__ == '__main__':
    unittest.main(verbosity=3)
