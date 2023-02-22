/* global describe beforeEach Controller it expect Party */
describe('Question Four and Question Five', () => {
  'use strict'

  describe('Party', () => {
    let Party
    beforeEach(() => {
      theParty = new Party()
    })
	
	describe('the name property', () => {
      it('should have an .name property', () => {
        expect(theElectorate.hasOwnProperty('name')).toBeTruthy()
      })
	})
	
	describe('the totalVotes property', () => {
	it('should have an .totalVotes property', () => {
      expect(theParty.hasOwnProperty('totalVotes')).toBeTruthy()
    })
	})
	
	describe('the percentVotes property', () => {
	it('should have an .percentVotes property', () => {
      expect(theParty.hasOwnProperty('percentVotes')).toBeTruthy()
    })
	})

    it('should have a .toString function', function () {
      expect(typeof theParty.toString).toBe('function')
    })
	
	it('should have a .toTableRow function', function () {
      expect(typeof theParty.toTableRow).toBe('function')
    })
	
	it('should have a .toRadio function', function () {
      expect(typeof theParty.toRadio).toBe('function')
    })
	
	it('should have a .setTotalVotes function', function () {
      expect(typeof theParty.setTotalVotes).toBe('function')
    })
	
	it('should have a .setPercentVotes function', function () {
      expect(typeof theParty.setPercentVotes).toBe('function')
    })
  })
  
   describe('Candidate', () => {
    let Candidate
    beforeEach(() => {
      theCandidate = new Candidate()
    })
	describe('the name property', () => {
    it('should have an .name property', () => {
      expect(theCandidate.hasOwnProperty('name')).toBeTruthy()
    })
	})
	
	describe('the totalVotes property', () => {
	it('should have an .totalVotes property', () => {
      expect(theCandidate.hasOwnProperty('totalVotes')).toBeTruthy()
    })
	})
	
	describe('the percentVotes property', () => {
	it('should have an .percentVotes property', () => {
      expect(theCandidate.hasOwnProperty('percentVotes')).toBeTruthy()
    })
	})

    it('should have a .toString function', function () {
      expect(typeof theCandidate.toString).toBe('function')
    })
	
	it('should have a .toTableRow function', function () {
      expect(typeof theCandidate.toTableRow).toBe('function')
    })
	
	it('should have a .toRadio function', function () {
      expect(typeof theCandidate.toRadio).toBe('function')
    })
	
	it('should have a .setTotalVotes function', function () {
      expect(typeof theCandidate.setTotalVotes).toBe('function')
    })
	
	it('should have a .setPercentVotes function', function () {
      expect(typeof theCandidate.setPercentVotes).toBe('function')
    })
  })
})
