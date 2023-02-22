/* globals NEWLINE TAB */
class Party {
  constructor (newName) {
    this.name = newName
	this.totalVotes = 0
	this.percentVotes = 0.0
  }

  toString () {
    const result = `${this.name}`
    return result
  }
  toTableRow() {
    let result = '<tr>'
    result += `<td>${this.name}</td>`
    result += '</tr>'
    return result
  }
  
  toRadio() {
    let result = '<input type="radio" name="party">'
    result += `${this.name}<br>`
    return result
	}
	
	setTotalVotes (newtotalVotes){
	this.totalVotes = newtotalVotes
	}
	
	setPercentVotes (newpercentVotes){
	this.percentVotes = newpercentVotes
	}
}

class Candidate {
  constructor (newName, theParty) {
    this.myparty = theParty
    this.name = newName
	this.totalVotes = 0
	this.percentVotes = 0.0
  }

  toString () {
    const result = `${this.name} - ${this.myparty}`
    return result
  }
  toTableRow() {
    let result = '<tr>'
    result += `<td>${this.name}</td>`
    result += `<td>${this.myparty}</td>`
    result += '</tr>'
    return result
  }
  
  toRadio() {
    let result = '<input type="radio" name="party">'
    result += `${this.name} - ${this.myparty} <br>`
    return result
	}
	
	setTotalVotes (newtotalVotes){
		this.totalVotes = newtotalVotes
	}
	
	setPercentVotes (newpercentVotes){
		this.percentVotes = newpercentVotes
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
    let result = `Wairarapa 2017 Parties ${NEWLINE}`
    for (const aParty of this.allMyParties) {
      result += TAB + aParty + NEWLINE
    }
    return result
  }
  
  toPartyTable(){
    this.sortParties()
    let result = `<table><tr><th colspan="3">Wairarapa 2017 Parties</th></tr>`
    for (const aParty of this.allMyParties) {
      result += aParty.toTableRow()
    }
    result += '</table>'
    return result
  }
  
   toPartyBallot(){
    this.sortParties()
    let result = `<form> Wairarapa 2017 Parties <br>`
    for (const aParty of this.allMyParties) {
      result += aParty.toRadio()
    }
    result += '</form>'
    return result
  }
  
	findParty (targetPartyName){
	  const result = this.allMyParties.find(aParty => aParty.name === targetPartyName)
	  return result
  }
  
	setPartyVote (targetPartyName, newVoteTotal){
	  const theParty = this.findParty(targetPartyName)
	  theParty.setTotalVotes(newVoteTotal)
  }
  
/* 	calcPartyPercentages () {
	  let totalVotesCount = 0
	  for (let aParty of this.allMyParties){
		  totalVotesCount += aParty.totalVotes
	  }
	  const onePercent = totalVotesCount / 100
	  for (let aParty of this.allMyParties){
		  const percent = aParty.totalVotes / onePercent
		  aParty.setPercentVotes(Number(newpercentVotes.toFixed(2)))
	  }
  } */

  addCandidate (newName, theParty) {
    const aNewCandidate = new Candidate(newName, theParty)
    this.allMyCandidates.push(aNewCandidate)
  }

  sortCandidates () {
    this.allMyCandidates.sort()
  }

  toCandidatesString () {
    this.sortCandidates()
    let result = `Wairarapa 2017 Candidates ${NEWLINE}`
    for (const aCandidate of this.allMyCandidates) {
      result += TAB + aCandidate + NEWLINE
    }
    return result
  }
  
  toCandidateTable(){
    this.sortCandidates()
    let result = `<table><tr><th colspan="3">Wairarapa 2017 Candidates</th></tr>`
    for (const aCandidate of this.allMyCandidates) {
      result += aCandidate.toTableRow()
    }
    result += '</table>'
    return result
  }
  
   toCandidateBallot(){
    this.sortCandidates()
    let result = `<form> Wairarapa 2017 Candidates <br>`
    for (const aCandidate of this.allMyCandidates) {
      result += aCandidate.toRadio()
    }
    result += '</form>'
    return result
  }
  
  findCandidate (targetCandidateName){
	  const result = this.allMyCandidates.find(candidate => candidate.name === targetCandidateName)
	  return result
  }
  
  setCandidateVote (targetCandidateName, newVoteTotal){
	  const theCandidate = this.findCandidate(targetCandidateName)
	  theCandidate.setTotalVotes(newVoteTotal)
  }
  
/*   calcCandidatePercentages () {
	  let totalVotesCount = 0
	  for (let aCandidate of this.allMyCandidates){
		  totalVotesCount += aCandidate.totalVotes
	  }
	  const onePercent = totalVotesCount / 100
	  for (let aCandidate of this.allMyCandidates){
		  const percent = aCandidate.totalVotes / onePercent
		  aCandidate.setPercentVotes(Number(newpercentVotes.toFixed(2)))
	  }
  } */
  
}
