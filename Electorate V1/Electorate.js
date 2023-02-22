/* globals View */
class Candidate {
  constructor (newFirstfirstname, newLastName, newElectorate) {
    this.firstname = newFirstfirstname
    this.lastname = newLastName
    this.electorate = newElectorate
  }
  toString () {
    let result = `${this.firstname} ( ${this.lastname} ) ${this.electorate}`
    return result
  }
}
class Electorate { // eslint-disable-line no-unused-vars
  constructor () {
    this.candidateCount = 0
    this.allMyCandidates = []
  }
  addCandidate (newFirstfirstname, newLastName, newElectorate) {
    let aNewCandidate = new Candidate(newFirstfirstname, newLastName, newElectorate)
    this.allMyCandidates.push(aNewCandidate)
    this.candidateCount += 1
  }
  sortCandidates () {
    this.allMyCandidates.sort(function (a, b) {
      if (a.firstname < b.firstname) {
        return -1
      }
      if (a.firstname > b.firstname) {
        return 1
      } // a must be equal to b
      return 0
    })
  }
  toString () {
    this.sortCandidates()
    let result = `This Reign has ${this.candidateCount} Candidates${View.NEWLINE()}`
    for (let aCandidate of this.allMyCandidates) {
      result += View.TAB() + aCandidate + View.NEWLINE()
    }
    return result
  }
}