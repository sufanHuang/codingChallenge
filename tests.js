const expect = require('chai').expect

const data = require('./data/elements.json')
const helper = require('./helper')

describe('shuffleItems functionality', () => {

    it('should shuffle data', ()=>{
        let result = helper.shuffleItems(data)

        expect(result).to.not.equal(data)
    })

});
