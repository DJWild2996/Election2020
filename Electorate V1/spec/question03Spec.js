/* globals describe beforeEach Controller it expect Candidate */
describe('Question Three', () => {
  describe('adding the Candidates', () => {
    let theElectorate
    beforeEach(() => {
      theElectorate = Controller.setup()
    })
    it('should have added 5 Candidates', () => {
      expect(theElectorate.allMyCandidates.length).toBe(6)
    })
    it('should have correctly set details for each Candidate', () => {
      theElectorate.sortCandidates()
      let aCandidate = theElectorate.allMyCandidates[0]
      expect(aCandidate).toBeDefined()
      expect(aCandidate.name).toBe('GREENSLADE, Roger')
	  expect(aCandidate.myparty).toBe('ACT New Zealand')

      aCandidate = theElectorate.allMyCandidates[1]
      expect(aCandidate).toBeDefined()
      expect(aCandidate.name).toBe('WADE-BROWN, Celia')
	  expect(aCandidate.myparty).toBe('Green Party')
	  
	  aCandidate = theElectorate.allMyCandidates[2]
      expect(aCandidate).toBeDefined()
      expect(aCandidate.name).toBe('MCANULTY, Kieran')
	  expect(aCandidate.myparty).toBe('Labour Party')
	  
	  aCandidate = theElectorate.allMyCandidates[3]
      expect(aCandidate).toBeDefined()
      expect(aCandidate.name).toBe('MARK, Ron')
	  expect(aCandidate.myparty).toBe('New Zealand First Party')
	  
	  aCandidate = theElectorate.allMyCandidates[4]
      expect(aCandidate).toBeDefined()
      expect(aCandidate.name).toBe('BUTTERICK, Mike')
	  expect(aCandidate.myparty).toBe('National Party')
	  
	  aCandidate = theElectorate.allMyCandidates[5]
      expect(aCandidate).toBeDefined()
      expect(aCandidate.name).toBe('BUTTERWORTH, Warren')
	  expect(aCandidate.myparty).toBe('New Conservative')
	  
    })
  })
})
