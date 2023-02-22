
/* globals Electorate */
class Controller { // eslint-disable-line no-unused-vars
  static setup () {
    const theElectorate = new Electorate()
	
		theElectorate.addParty('ACT New Zealand')
		theElectorate.addParty('Aotearoa legalise Cannabis Party')
		theElectorate.addParty('New Conservative')
		theElectorate.addParty('Democrats for Social Credit')
		theElectorate.addParty('Green Party')
		theElectorate.addParty('Labour Party')
		theElectorate.addParty('MANA')
		theElectorate.addParty('Maori Party')
		theElectorate.addParty('National Party')
		theElectorate.addParty('New Zealand First Party')
		theElectorate.addParty('NZ Outdoors Party')
		theElectorate.addParty('The opportunities Party')
		theElectorate.addParty('Sustainable NZ')
		theElectorate.addParty('Vision NZ')
		theElectorate.addParty('ONE')
    		
		theElectorate.addCandidate('GREENSLADE, Roger', 'ACT New Zealand')
		theElectorate.addCandidate('WADE-BROWN, Celia', 'Green Party')
		theElectorate.addCandidate('MCANULTY, Kieran', 'Labour Party')
		theElectorate.addCandidate('MARK, Ron', 'New Zealand First Party')
		theElectorate.addCandidate('BUTTERICK, Mike', 'National Party')
		theElectorate.addCandidate('BUTTERWORTH, Warren', 'New Conservative')
		
/* 		theElectorate.setCandidateVote('GREENSLADE, Roger', 130)
		theElectorate.setCandidateVote('HART, John', 1683)
		theElectorate.setCandidateVote('MCANULTY, Michael', 13642)
		theElectorate.setCandidateVote('MARK, Ron', 7753)
		theElectorate.setCandidateVote('SCOTT, Alastair', 16514)
		/* theElectorate.calcCandidatePercentages() */
		
	/* 	theElectorate.setPartyVote('ACT New Zealand', 162)
		theElectorate.setPartyVote('Aotearoa Legalise Cannabis Party', 150)
		theElectorate.setPartyVote('Ban 1080', 81)
		theElectorate.setPartyVote('Conservative', 86)
		theElectorate.setPartyVote('Democrats for Social Credit', 8)
		theElectorate.setPartyVote('Green Party', 1950)
		theElectorate.setPartyVote('Internet Party', 6)
		theElectorate.setPartyVote('Labour Party', 12984)
		theElectorate.setPartyVote('MANA', 8)
		theElectorate.setPartyVote('Maori Party', 209)
		theElectorate.setPartyVote('National Party', 19750)
		theElectorate.setPartyVote('New Zealand First Party', 4180)
		theElectorate.setPartyVote('New Zealand People\'s Party', 24)
		theElectorate.setPartyVote('NZ Outdoors Party', 29)
		theElectorate.setPartyVote('The Opportunities Party', 821)
		theElectorate.setPartyVote('United Future', 20) */ 
		/* theElectorate.calcPartyPercentages() */
		
		return theElectorate
  }
}
