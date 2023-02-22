describe('HTML', function() {
  describe('The sections', function() {
    it('should have one section', function() {
      let allTags = document.getElementsByTagName('section')
      let tagCount = allTags.length
      expect(tagCount).toBe(2)
    })
    
    it('should have an inner div for input', function() {
      let firstSection = document.getElementsByTagName('section')[0]
      let tagCount = firstSection.childElementCount
      expect(tagCount).toBe(1)
      // the output div will not exist when program is first run!
    })
    
   
  })

  describe('The input textboxes', function() {

    it('should have an three text inputs', function() {
      let allInputs = document.getElementsByClassName('textbox')
      let inputCount = allInputs.length
      expect(inputCount).toBe(3)
    })
    
    it('should have an input for name', function() {
      expect(document.getElementById('name')).toBeTruthy()
    })
    
    it('should have an input for color', function() {
      expect(document.getElementById('color')).toBeTruthy()
    })
    
    it('should have an input for cost', function() {
      expect(document.getElementById('cost')).toBeTruthy()
    })

  })
  
    describe('The button', function() {

    it('should exist', function() {
      let allInputs = document.getElementsByClassName('textbox')
      let inputCount = allInputs.length
      expect(inputCount).toBe(3)
    })
    
    it('should have an input for name', function() {
      expect(document.getElementById('name')).toBeTruthy()
    })
    
    it('should have an input for color', function() {
      expect(document.getElementById('color')).toBeTruthy()
    })
    
    it('should have an input for cost', function() {
      expect(document.getElementById('cost')).toBeTruthy()
    })

  })
 
})
