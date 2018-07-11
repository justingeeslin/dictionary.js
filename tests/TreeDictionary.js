const TreeDictionary = require('../js/TreeDictionary.js');

describe('TreeDictionary', function() {

		beforeAll(function() {

		});

		it('should construct', function() {
			var aNode = new TreeDictionary();
			expect(aNode instanceof TreeDictionary).toBe(true)
    });

		it('should insert and retrieve an item', function() {
			var myDictionary = new TreeDictionary();

			var item = 8;
			myDictionary.insert(item);

			console.log('The cost of insertion is ' + myDictionary.cost);
			console.log('The Tree ', myDictionary.getTree());

			expect(myDictionary.get(item)).toBe(item);

			console.log('The cost of insertion and retreival is ' + myDictionary.cost);
    });

		it('should insert three items expect the cost to be 4', function() {
			var myDictionary = new TreeDictionary();

			myDictionary.insert(5);
			myDictionary.insert(3);
			myDictionary.insert(2);

			// Insert a root: 1
			// Insert but assign a child to the root : 1
			// traverse a layer (1) and insert(1): 2
			expect(myDictionary.cost).toBe(4);

			console.log('The cost of insertion is ' + myDictionary.cost);
    });

		it('should insert four items (1 root, 2 left, and 1 right) expect the cost to be 5', function() {
			var myDictionary = new TreeDictionary();

			myDictionary.insert(5);
			myDictionary.insert(3);
			myDictionary.insert(2);
			myDictionary.insert(8);

			// Insert a root: 1
			// Insert but assign a child to the root : 1
			// traverse a layer (1) and insert(1): 2
			// Insert but assign a (right) child to the root : 1
			expect(myDictionary.cost).toBe(5);

			console.log('The cost of insertion is ' + myDictionary.cost);
			console.log('The Tree ', myDictionary.getTree());
    });

		it('should insert several items (1 root, 2 left, and 1 right) and retrieve the lowest one expect the cost to be 3 the height of the lowest element', function() {
			var myDictionary = new TreeDictionary();

			myDictionary.insert(5);
			myDictionary.insert(3);
			myDictionary.insert(2);
			myDictionary.insert(8);

			// Zero after insertion to get only the cost of the search
			myDictionary.cost = 0;

			myDictionary.get(2);
			expect(myDictionary.cost).toBe(3);

			console.log('The cost of this search is ' + myDictionary.cost);
			console.log('The Tree ', myDictionary.getTree());
    });

		it('should insert several items (1 root, 2 left, and 1 right) and retrieve from the right side (for coverage) one expect the cost to be 2', function() {
			var myDictionary = new TreeDictionary();

			myDictionary.insert(5);
			myDictionary.insert(3);
			myDictionary.insert(2);
			myDictionary.insert(8);
			myDictionary.insert(18);

			// Zero after insertion to get only the cost of the search
			myDictionary.cost = 0;

			myDictionary.get(8);
			expect(myDictionary.cost).toBe(2);

			console.log('The cost of this search is ' + myDictionary.cost);
			console.log('The Tree ', myDictionary.getTree());
    });

		afterAll(function() {

		});

});
