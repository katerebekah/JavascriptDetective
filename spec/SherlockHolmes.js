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

/*describe("The Sign of the Four", function() {
  it("", function() {
		var TheSignOfTheFour;
	});
});

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