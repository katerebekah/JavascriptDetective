describe("A Study In Scarlet", function() {
  it("should return a+b", function() {
		var PoisonedPill = function (){
			var a = 7;
			var c = 4;
			return;
		}
		var SugarPill = function(){
			var b = 9;
			var addition = function(){
				return b + PoisonedPill.a;
			} 
			return {addition: addition}
		}

		expect(SugarPill().addition()).toEqual(16);
  });
});

describe("The Sign of the Four", function() {
  it("", function() {
		var Thaddeus = ['pearls', 'gold', 'diamonds', 'silver', 'emeralds'];
		var Mary = [12, 53, 21, 67, 34];
		var TreasureCount = function(array, array2){
			var returnObject = [];
			/*for (i= 0; i < array.length; i++){
				returnObject.push([array[i]]);
			}
			for (var i=array2.length-1; i > -1; i--){
				console.log(returnObject[i]);
//				returnObject[i].push(array2[i]);
			}*/
			return returnObject;
		}
		expect(TreasureCount(Thaddeus, Mary)).toEqual([ [ 'pearls', 34 ], [ 'gold', 67 ], [ 'diamonds', 21 ], [ 'silver', 53 ], [ 'emeralds', 12 ] ])
	});
});

/*
describe("The Hound of Baskerville", function() {
  it("", function() {
		var TheHoundOfBaskerville;
	});
});

describe("The Valley of Fear", function() {
  it("", function() {
		var TheValleyOfFear;
  });
});


*/