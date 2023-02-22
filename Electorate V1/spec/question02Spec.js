/* globals describe beforeEach Controller it expect Party */
describe('Question Two', () => {
  describe('adding the parties', () => {
    let theElectorate
    beforeEach(() => {
      theElectorate = Controller.setup()
    })
    it('should have added 16 Parties', () => {
      expect(theElectorate.allMyParties.length).toBe(18)
    })
    it('should have correctly set details for each Party', () => {
      theElectorate.sortParties()
      let aParty = theElectorate.allMyParties[0]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('National Party')

      aParty = theElectorate.allMyParties[1]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Labour Party')
	  
	  aParty = theElectorate.allMyParties[2]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('New Zealand First')
	  
	  aParty = theElectorate.allMyParties[3]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Green Party')
	  
	  aParty = theElectorate.allMyParties[4]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('ACT Party')
	  
	  aParty = theElectorate.allMyParties[5]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Advance NZ')
	  
	  aParty = theElectorate.allMyParties[6]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Opportunitites Party')
	  
	  aParty = theElectorate.allMyParties[7]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Maori Party')
	  
	  aParty = theElectorate.allMyParties[8]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Legalise Cannabis Party')
	  
	  aParty = theElectorate.allMyParties[9]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('New Conservative Party')
	  
	  aParty = theElectorate.allMyParties[10]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Mana Party')
	  
	  aParty = theElectorate.allMyParties[11]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Outdoors Party')
	  
	  aParty = theElectorate.allMyParties[12]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Social Credit Party')
	  
	  aParty = theElectorate.allMyParties[13]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Heartland Party')
	  
	  aParty = theElectorate.allMyParties[14]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('ONE Party')
	  
	  aParty = theElectorate.allMyParties[15]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Sustainable NZ Party')
	  
	  aParty = theElectorate.allMyParties[16]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('TEA Party')
	  
	  aParty = theElectorate.allMyParties[17]
      expect(aParty).toBeDefined()
      expect(aParty.name).toBe('Vision NZ Party')
	  
	  
    })
  })
})
