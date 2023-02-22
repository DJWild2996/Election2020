/* globals NEWLINE TAB */
class Party {
  constructor (newName) {
    this.name = newName
  }

  toString () {
    const result = `${this.name}`
    return result
  }
  
  toRadio() {
    let result = '<input type="radio" name="party">'
    result += `${this.name}<br>`
    return result
	}
}

class Candidate {
  constructor (newName, theParty) {
    this.myparty = theParty
    this.name = newName
  }

  toString () {
    const result = `${this.name} - ${this.myparty}`
    return result
  }
  
  toRadio() {
    let result = '<input type="radio" name="party">'
    result += `${this.name} - ${this.myparty} <br>`
    return result
	}
	
}

class Electorate { 
  constructor () {
    this.allMyCandidates = []
	this.allMyParties = []
  }

  addParty (newName) {
    const aNewParty = new Party(newName)
    this.allMyParties.push(aNewParty)
  }

  sortParties () {
    this.allMyParties.sort()
  }

  toPartiesString () {
    this.sortParties()
    let result = `Wairarapa 2020 Parties ${NEWLINE}`
    for (const aParty of this.allMyParties) {
      result += TAB + aParty + NEWLINE
    }
    return result
  }
  
   toPartyBallot(){
    this.sortParties()
    let result = `<form> Wairarapa 2020 Parties <br>`
    for (const aParty of this.allMyParties) {
      result += aParty.toRadio()
    }
    result += '</form>'
    return result
  }

  addCandidate (newName, theParty) {
    const aNewCandidate = new Candidate(newName, theParty)
    this.allMyCandidates.push(aNewCandidate)
  }

  sortCandidates () {
    this.allMyCandidates.sort()
  }

  toCandidatesString () {
    this.sortCandidates()
    let result = `Wairarapa 2020 Candidates ${NEWLINE}`
    for (const aCandidate of this.allMyCandidates) {
      result += TAB + aCandidate + NEWLINE
    }
    return result
  }
  
   toCandidateBallot(){
    this.sortCandidates()
    let result = `<form> Wairarapa 2020 Candidates <br>`
    for (const aCandidate of this.allMyCandidates) {
      result += aCandidate.toRadio()
    }
    result += '</form>'
    return result
  }
  
}
