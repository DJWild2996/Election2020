class Party:
    def __init__(self, new_name):
        self.name = new_name
        self.total_party_votes = 0
        self.percent_votes = 0.0

    def __str__(self):
        return f'{self.name} {self.total_party_votes} {self.percent_votes}'

    def to_radio(self):
        result = f'<input type="radio" id="{self}" name="party" value="{self}">'
        result += f'<label for="{self}">{self}</label>'
        result += f'<br>'
        return result

    def to_result_table_row(self):
        result = f'<tr>'
        result += f'<td>{self.name} -'
        result += f'<td>{self.total_party_votes}</td>'
        result += f'<td>% {self.percent_votes}</td>'
        result += f'</tr>'
        return result

    def to_result_input(self):
        result = f'<label for="{self.name}" id="{self.name} -" name="{self.name}" min="0">{self.name} </label> <NOBR>'
        return result

    def set_total_party_votes(self, new_total_party_votes):
        self.total_party_votes += new_total_party_votes

    def set_percent_votes(self, new_percent_votes):
        self.percent_votes = round(new_percent_votes, 2)

    def to_result(self):
        result = f"{self.name} {self.total_party_votes}, {self.percent_votes}"
        return result


