from Party import Party
from Candidate import Candidate


class Electorate:
    def __init__(self, new_year, new_name):
        self.year = new_year
        self.name = new_name
        self.all_my_parties = []
        self.all_my_candidates = []

    def __str__(self):
        return f"{self.year},{self.name}"

    def add_party(self, new_name):
        a_party = Party(new_name)
        self.all_my_parties.append(a_party)

    def sort_parties_by_name(self):
        self.all_my_parties = sorted(self.all_my_parties, key=lambda party: party.name)

    def sort_candidate_by_vote(self):
        self.all_my_candidates = sorted(self.all_my_candidates, key=lambda candidate: candidate.total_party_votes)

    def find_party(self, target_party_id):
        return next((party for party in self.all_my_parties if party.name == target_party_id), None)

    def find_party_vote(self, target_party_name):
        return next((party for party in self.all_my_parties if party.name == target_party_name), None)

    def set_party_vote(self, target_party_id, new_total_party_votes):
        party_name = self.find_party(target_party_id)
        party_name.set_total_party_votes(new_total_party_votes)

    def calc_party_percentages(self):
        sum_of_votes = 0
        for a_party in self.all_my_parties:
            sum_of_votes += a_party.total_party_votes
        one_percent = sum_of_votes / 100
        for a_party in self.all_my_parties:
            new_percent_votes = a_party.total_party_votes / one_percent
            a_party.set_percent_votes(new_percent_votes)

    def to_party_ballot(self):
        self.sort_parties_by_name()
        result = f"<form>{self.name} {self.year} <br>"
        for a_party in self.all_my_parties:
            result += a_party.to_radio()
        result += f"</form>"
        return result

    def to_candidate_ballot(self):
        self.sort_candidates_by_name()
        result = f'<form>{self.name} {self.year} <br>'
        for a_candidate in self.all_my_candidates:
            result += a_candidate.to_radio()
        result += f'</form>'
        return result

    def to_table(self):
        result = f"<table><tr><th colspan='2'>{self.name}</th><th>  {self.year}</th></tr></table>"
        return result

    def add_candidate(self, new_name, the_party):
        the_party = self.find_party(the_party)
        a_candidate = Candidate(new_name, the_party)
        self.all_my_candidates.append(a_candidate)

    def sort_candidates_by_name(self):
        self.all_my_candidates = sorted(self.all_my_candidates, key=lambda candidate: candidate.name)

    def to_candidate_table(self):
        self.sort_candidates_by_name()
        result = f"<table><tr><th colspan='2'>{self.name}  {self.year}</th></tr>"
        for a_candidate in self.all_my_candidates:
            result += a_candidate.to_table_row() + '<br>'
        result += f'</table>'
        return result

    def get_candidates(self):
        self.sort_candidates_by_name()
        result = ''
        for a_candidate in self.all_my_candidates:
            result += '\t' + str(a_candidate) + '\n'
        return result

    def set_candidate_vote(self, target_candidate_name, new_total_votes):
        candidate_name = self.find_candidate(target_candidate_name)
        candidate_name.set_total_votes(new_total_votes)

    def calc_candidate_percentages(self):
        sum_of_votes = 0
        for a_candidate in self.all_my_candidates:
            sum_of_votes += a_candidate.total_votes
        one_percent = sum_of_votes / 100
        for a_candidate in self.all_my_candidates:
            new_percent_votes = a_candidate.total_votes / one_percent
            a_candidate.set_percent_votes(new_percent_votes)

    def to_candidate_results(self):
        result = f"{self.name} {self.year} <br>"
        for a_candidate in self.all_my_candidates:
            result += a_candidate.to_result()
            result += f'<br>'
        return result

    def to_candidate_result_table(self):
        result = f"<table><tr><th colspan='1'>{self.name}</th><th colspan='2'>  {self.year}</th></tr>"
        for a_candidate in self.all_my_candidates:
            result += a_candidate.to_result_table_row()
        result += f'</table>'
        return result

    def to_candidate_result_form(self):
        result = f'<form>'
        for a_candidate in self.all_my_candidates:
            result += a_candidate.to_result_input()
            result += f'<br>'
        result += f'</form>'
        return result


    def find_candidate(self, target_candidate_name):
        return next((candidate for candidate in self.all_my_candidates if candidate.name == target_candidate_name), None)

