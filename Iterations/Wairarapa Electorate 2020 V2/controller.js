
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
		
		return theElectorate
  }
}
