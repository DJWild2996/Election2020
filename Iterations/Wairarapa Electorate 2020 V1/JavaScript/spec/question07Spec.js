/* globals describe beforeEach Controller it expect Electorate */
describe('Question Seven', () => {
  describe('adding the Candidate and Party Votes', () => {
    let theElectorate
    beforeEach(() => {
      theElectorate = Controller.setup()
    })
    it('should have added 5 Candidates', () => {
      expect(theElectorate.allMyCandidates.length).toBe(5)
    })
    it('should have correctly set votes for each Candidate', () => {
      theElectorate.sortCandidates()
      let aCandidate = theElectorate.allMyCandidates[0]
      expect(aCandidate).toBeDefined()
      expect(aCandidate.name).toBe('GREENSLADE, Roger')
	  expect(aCandidate.totalVotes).toBe('130')
	  expect(aCandidate.percentVotes).toBe('')

      aCandidate = theElectorate.allMyCandidates[1]
      expect(aCandidate).toBeDefined()
      expect(aCandidate.name).toBe('HART, John')
	  expect(aCandidate.totalVotes).toBe('1683')
	  expect(aCandidate.percentVotes).toBe('')
	  
	  aCandidate = theElectorate.allMyCandidates[2]
      expect(aCandidate).toBeDefined()
      expect(aCandidate.name).toBe('MCANULTY, Michael')
	  expect(aCandidate.totalVotes).toBe('13642')
	  expect(aCandidate.percentVotes).toBe('')
	  
	  aCandidate = theElectorate.allMyCandidates[3]
      expect(aCandidate).toBeDefined()
      expect(aCandidate.name).toBe('MARK, Ron')
	  expect(aCandidate.totalVotes).toBe('7753')
	  expect(aCandidate.percentVotes).toBe('')
	  
	  aCandidate = theElectorate.allMyCandidates[4]
      expect(aCandidate).toBeDefined()
      expect(aCandidate.name).toBe('SCOTT, Alastair')
	  expect(aCandidate.totalVotes).toBe('16514')
	  expect(aCandidate.percentVotes).toBe('')
	  
    })
  })
  
  
    it('should have added 16 Parties', () => {
      expect(theElectorate.allMyParties.length).toBe(16)
    })
    it('should have correctly set votes for each Party', () => {
      theElectorate.sortParties()
      let aParty = theElectorate.allMyParties[0]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('ACT New Zealand')
	  expect(aParty.totalVotes).toBe('162')
	  expect(aParty.percentVotes).toBe('')

      aParty = theElectorate.allMyParties[1]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Aotearoa legalise Cannabis Party')
	  expect(aParty.totalVotes).toBe('150')
	  expect(aParty.percentVotes).toBe('')
	  
	  aParty = theElectorate.allMyParties[2]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Ban 1080')
	  expect(aParty.totalVotes).toBe('81')
	  expect(aParty.percentVotes).toBe('')
	  
	  aParty = theElectorate.allMyParties[3]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Conservative')
	  expect(aParty.totalVotes).toBe('86')
	  expect(aParty.percentVotes).toBe('')
	  
	  aParty = theElectorate.allMyParties[4]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Democrats for social Credit')
	  expect(aParty.totalVotes).toBe('8')
	  expect(aParty.percentVotes).toBe('')
	  
	  aParty = theElectorate.allMyParties[5]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Green Party')
	  expect(aParty.totalVotes).toBe('1950')
	  expect(aParty.percentVotes).toBe('')
	  
	  aParty = theElectorate.allMyParties[6]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Internet Party')
	  expect(aParty.totalVotes).toBe('6')
	  expect(aParty.percentVotes).toBe('')
	  
	  aParty = theElectorate.allMyParties[7]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Labour Party')
	  expect(aParty.totalVotes).toBe('12984')
	  expect(aParty.percentVotes).toBe('')
	  
	  aParty = theElectorate.allMyParties[8]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('MANA')
	  expect(aParty.totalVotes).toBe('8')
	  expect(aParty.percentVotes).toBe('')
	  
	  aParty = theElectorate.allMyParties[9]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Maori Party')
	  expect(aParty.totalVotes).toBe('209')
	  expect(aParty.percentVotes).toBe('')
	  
	  aParty = theElectorate.allMyParties[10]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('National Party')
	  expect(aParty.totalVotes).toBe('19750')
	  expect(aParty.percentVotes).toBe('')
	  
	  aParty = theElectorate.allMyParties[11]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('New Zealand First Party')
	  expect(aParty.totalVotes).toBe('4180')
	  expect(aParty.percentVotes).toBe('')
	  
	  aParty = theElectorate.allMyParties[12]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('New Zealand Peoples Party')
	  expect(aParty.totalVotes).toBe('24')
	  expect(aParty.percentVotes).toBe('')
	  
	  aParty = theElectorate.allMyParties[13]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('NZ Outdoors Party')
	  expect(aParty.totalVotes).toBe('29')
	  expect(aParty.percentVotes).toBe('')
	  
	  aParty = theElectorate.allMyParties[14]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('United Future')
	  expect(aParty.totalVotes).toBe('20')
	  expect(aParty.percentVotes).toBe('')
	  
	  aParty = theElectorate.allMyParties[15]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('The opportunities Party')
	  expect(aParty.totalVotes).toBe('821')
	  expect(aParty.percentVotes).toBe('')
	  
	  
    })
  })
