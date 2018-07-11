const BinaryNode = require('../js/BinaryNode.js');

describe('BinaryNode', function() {

		beforeAll(function() {

		});

		it('should construct', function() {
			var aNode = new BinaryNode();
			expect(aNode instanceof BinaryNode).toBe(true)
    });

		it('should set data upon construction', function() {
			var number = 8;
			var aNode = new BinaryNode(number)
			// Get the value. Is it the same value?
			expect(aNode.item).toBe(number);
    });

		afterAll(function() {

		});

});
