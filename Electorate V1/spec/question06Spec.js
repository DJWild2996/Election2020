/* global describe beforeEach it expect Electorate */
describe('Question Six', () => {
  describe('Electorate', () => {
    let theElectorate
    beforeEach(() => {
      theElectorate = new Electorate()
    })
    it('should have an .toPartiesString function', () => {
      expect(typeof theElectorate.toPartiesString).toBe('function')
    })
	
	it('should have an .toPartyTable function', () => {
      expect(typeof theElectorate.toPartyTable).toBe('function')
    })

    it('should have a .toPartyBallot function', () => {
      expect(typeof theElectorate.toPartyBallot).toBe('function')
    })
	
	it('should have a .setPartyVote function', () => {
      expect(typeof theElectorate.setPartyVote).toBe('function')
    })
	
    it('should have a .calcPartyPercentages function', function () {
      expect(typeof theElectorate.calcPartyPercentages).toBe('function')
    })
	
    it('should have an .toCandidatesString function', () => {
      expect(typeof theElectorate.toCandidatesString).toBe('function')
    })
	
	it('should have an .toCandidateTable function', () => {
      expect(typeof theElectorate.toCandidateTable).toBe('function')
    })

    it('should have a .toCandidateBallot function', () => {
      expect(typeof theElectorate.toCandidateBallot).toBe('function')
    })
	
	it('should have a .setCandidateVote function', () => {
      expect(typeof theElectorate.setCandidateVote).toBe('function')
    })
	
    it('should have a .calcCandidatePercentages function', function () {
      expect(typeof theElectorate.calcCandidatePercentages).toBe('function')
    })
	
  })
})