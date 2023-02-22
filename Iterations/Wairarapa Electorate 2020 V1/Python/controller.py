from electorate import Electorate


def setup():
    the_electorate = Electorate('Wairarapa', 2017)
    the_electorate.add_party('ACT New Zealand')
    the_electorate.add_party('Aotearoa legalise Cannabis Party')
    the_electorate.add_party('Ban 1080')
    the_electorate.add_party('Conservative')
    the_electorate.add_party('Democrats for social Credit')
    the_electorate.add_party('Green Party')
    the_electorate.add_party('Internet Party')
    the_electorate.add_party('Labour Party')
    the_electorate.add_party('MANA')
    the_electorate.add_party('Maori Party')
    the_electorate.add_party('National Party')
    the_electorate.add_party('New Zealand First Party')
    the_electorate.add_party('New Zealand Peoples Party')
    the_electorate.add_party('NZ Outdoors Party')
    the_electorate.add_party('United Future')
    the_electorate.add_party('The opportunities Party')

    the_electorate.add_candidate('GREENSLADE, Roger', 'ACT New Zealand')
    the_electorate.add_candidate('HART, John', 'Green Party')
    the_electorate.add_candidate('MCANULTY, Michael', 'Labour Party')
    the_electorate.add_candidate('MARK, Ron', 'New Zealand First Party')
    the_electorate.add_candidate('SCOTT, Alastair', 'National Party')

    the_electorate.set_candidate_vote('GREENSLADE, Roger', 130)
    the_electorate.set_candidate_vote('HART, John', 1683)
    the_electorate.set_candidate_vote('MCANULTY, Michael', 13642)
    the_electorate.set_candidate_vote('MARK, Ron', 7753)
    the_electorate.set_candidate_vote('SCOTT, Alastair', 16514)
    the_electorate.calc_candidate_percentages()
    the_electorate.to_candidate_results()

    the_electorate.set_party_vote('ACT New Zealand', 162)
    the_electorate.set_party_vote('Aotearoa Legalise Cannabis Party', 150)
    the_electorate.set_party_vote('Ban 1080', 81)
    the_electorate.set_party_vote('Conservative', 86)
    the_electorate.set_party_vote('Democrats for Social Credit', 8)
    the_electorate.set_party_vote('Green Party', 1950)
    the_electorate.set_party_vote('Internet Party', 6)
    the_electorate.set_party_vote('Labour Party', 12984)
    the_electorate.set_party_vote('MANA', 8)
    the_electorate.set_party_vote('Maori Party', 209)
    the_electorate.set_party_vote('National Party', 19750)
    the_electorate.set_party_vote('New Zealand First Party', 4180)
    the_electorate.set_party_vote('New Zealand People\'s Party', 24)
    the_electorate.set_party_vote('NZ Outdoors Party', 29)
    the_electorate.set_party_vote('The Opportunities Party', 821)
    the_electorate.set_party_vote('United Future', 20)
    the_electorate.calc_party_percentages()


    return the_electorate


if __name__ == "__main__":
    Electorate = setup()
    print(Electorate.to_candidate_ballot())
    print(Electorate.to_candidate_table())
    print(Electorate.to_table())

