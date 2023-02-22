
class Candidate:
    def __init__(self, new_name, the_party):
        self.name = new_name
        self.party = the_party
        self.total_votes = 0
        self.percent_votes = 0.0

    def __str__(self):
        return f'{self.name}  [{self.party}] {self.total_votes} {self.percent_votes}'

    def to_table_row(self):
        result = f'<tr><td>{self.name}</td><td>{self.party}</td></tr>'
        return result

    def to_radio(self):
        result = f'''<input type="radio" id="{self}" name="Candidate" value="{self}">
                 <label for="{self}">{self}</label><br>'''
        return result

    def set_total_votes(self, new_total_votes):
        self.total_votes += new_total_votes

    def set_percent_votes(self, new_percent_votes):
        self.percent_votes = round(new_percent_votes, 2)

    def to_result(self):
        result = f"{self.name}-{self.party}, {self.total_votes}, {self.percent_votes}"
        return result

    def to_result_table_row(self):
        result = f'<tr>'
        result += f'<td>{self.name} -'
        result += f'{self.party}</td>'
        result += f'<td>{self.total_votes}</td>'
        result += f'<td>% {self.percent_votes}</td>'
        result += f'</tr>'
        return result

    def to_result_input(self):
        result = f'<label for="{self.name}" - {self.party}><input type="number" id="{self.name} - {self.party}" name="{self.name}" min="0">{self.name} - {self.party}</label> <NOBR>'
        return result
