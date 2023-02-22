/* globals describe beforeEach Controller it expect Party */
describe('Question Two', () => {
  describe('adding the parties', () => {
    let theElectorate
    beforeEach(() => {
      theElectorate = Controller.setup()
    })
    it('should have added 16 Parties', () => {
      expect(theElectorate.allMyParties.length).toBe(16)
    })
    it('should have correctly set details for each Party', () => {
      theElectorate.sortParties()
      let aParty = theElectorate.allMyParties[0]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('ACT New Zealand')

      aParty = theElectorate.allMyParties[1]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Aotearoa legalise Cannabis Party')
	  
	  aParty = theElectorate.allMyParties[2]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Ban 1080')
	  
	  aParty = theElectorate.allMyParties[3]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Conservative')
	  
	  aParty = theElectorate.allMyParties[4]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Democrats for social Credit')
	  
	  aParty = theElectorate.allMyParties[5]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Green Party')
	  
	  aParty = theElectorate.allMyParties[6]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Internet Party')
	  
	  aParty = theElectorate.allMyParties[7]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Labour Party')
	  
	  aParty = theElectorate.allMyParties[8]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('MANA')
	  
	  aParty = theElectorate.allMyParties[9]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Maori Party')
	  
	  aParty = theElectorate.allMyParties[10]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('National Party')
	  
	  aParty = theElectorate.allMyParties[11]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('New Zealand First Party')
	  
	  aParty = theElectorate.allMyParties[12]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('New Zealand Peoples Party')
	  
	  aParty = theElectorate.allMyParties[13]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('NZ Outdoors Party')
	  
	  aParty = theElectorate.allMyParties[14]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('United Future')
	  
	  aParty = theElectorate.allMyParties[15]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('The opportunities Party')
	  
	  
    })
  })
})
