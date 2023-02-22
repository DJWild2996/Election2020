/* global describe beforeEach it expect Electorate */
describe('Question One', () => {
  describe('Electorate', () => {
    let theElectorate
    beforeEach(() => {
      theElectorate = new Electorate()
    })
    describe('the allMyCandidates property', () => {
      it('should have an .allMyCandidates property', () => {
        expect(theElectorate.hasOwnProperty('allMyCandidates')).toBeTruthy()
      })
      it('should reference an array', () => {
        expect(Array.isArray(theElectorate.allMyCandidates)).toBeTruthy()
      })
    })
	
	it('should have an .addCandidate function', () => {
      expect(typeof theElectorate.addCandidate).toBe('function')
    })
	
	it('should have a .sortCandidates function', function () {
      expect(typeof theElectorate.sortCandidates).toBe('function')
    })
	
  })
})
