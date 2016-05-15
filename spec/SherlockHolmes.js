// <IGNORE ME>
var i;
var heirs;
// </IGNORE ME>

describe("A Study In Scarlet", function() {
  it("should have access to PoisonedPill.a", function() {
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
  it("should reverse Mary's fortunes.", function() {

  	//each of the values of the Thaddeus array 
  	//should match up to the reverse value in Mary's array.
		
		var Thaddeus = ['pearls', 'gold', 'diamonds', 'silver', 'emeralds'];
		var Mary = [12, 53, 21, 67, 34];
		
		var TreasureCount = function(array, array2){
			var returnObject = [];
		
			for (i= 0; i < array.length; i++){
				returnObject.push([array[i], 0]);
			}
		
			for (i=array2.length-1; i > -1; i--){
				returnObject[i][1] = array2.reverse()[i];
			}
		
			return returnObject;
		}
		expect(TreasureCount(Thaddeus, Mary)).toEqual([ [ 'pearls', 34 ], [ 'gold', 67 ], [ 'diamonds', 21 ], [ 'silver', 53 ], [ 'emeralds', 12 ] ])
	});
});

describe("The Hound of the Baskervilles", function() {
  it("should only reveal the correct values outside the loop.", function() {
		// value[0] is name of potential heir, value[1] is whether they are alive  
		var TheHoundOfTheBaskervilles = [["Charles", false], ["Henry", true], ["Rodger", true]];

		function whoCanInheritTheFortune (array){

			var findTheHeirs = function(){
				for (i = 0; i < array.length; i++){
					var heirs = [];
					if(!array[i][1]){
						heirs.push(array[i][0]);
					}
				}	
				return heirs
			}

			findTheHeirs();

			return {heirs: heirs};
		}

		var heir = whoCanInheritTheFortune(TheHoundOfTheBaskervilles).heirs;

		expect(i).not.toBeDefined();
		expect(heir).toBeDefined();
	});
});


/*describe("The Valley of Fear", function() {
  it("", function() {
		var TheValleyOfFear;
  });
});*/
