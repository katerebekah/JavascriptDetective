//JAVASCRIPT ARRAY METHODS

//.pop() - removes and returns last element of an array
//.push() - adds element to end of array and returns new length of array
//.reverse() - Reverses order of the elements of an array
//.shift() - removes the first element of an array and returns that element
//.sort() - sorts the elements from an array and returns the array
//.splice() - adds or removes elements from an array
//.unshift() - adds one or more elemets to the front of an array and returns the new length of the array


describe("Mr. Monk and the Candidate", function(){
	it("removes and returns the last element of an array", function(){
		//Mr. Monk has always heard that once a lady gets dressed, 
		//she should take back off the last accessory she puts on.
		
		//Fortunately for you and Mr. Monk, 
		//Mrs. Breckham has made an array of everything she is wearing in the order she put them on
		
		var mrsBreckhamsOutfit = ["red dress", "black shoes", "diamond necklace", "diamond bracelet", "Lady the Pomeranian", "black handbag", "white fascinator"];
		
		var itemRemoved; 
		
		expect(mrsBreckhamsOutfit).toBe(["red dress", "black shoes", "diamond necklace", "diamond bracelet", "Lady the Pomeranian", "black handbag"]);
		expect(itemRemoved).toBe("white fascinator");
	});
});

describe("Mr. Monk and the Psychic", function(){
	it("adds an element to the end of an array and returns the new length of array", function(){
		//Mr. Monk discovered that Mr. Farris, Mr. Gregory, and Mr. Harney 
		//had each stolen one of the 10 gems from the famous Ingrid Auction House.
		//Mr. Monk must return the gems before the big charity auction event Friday night.
		var auctionsGems = ["Yellow Diamond", "Ruby", "Blue Sapphire", "Opal", "Diamond", "Aquamarine", "Garnet"]
		
		var Farris = "Emerald";
		var Gregory = "White Sapphire";
		var Harney = "Citrine";

		var numberOfGems;

		expect(auctionsGems).toBe(["Yellow Diamond", "Ruby", "Blue Sapphire", "Opal", "Diamond", "Aquamarine", "Garnet", "Emerald", "White Sapphire", "Citrine"])
		expect(numberOfGems).toBe(10);
	});
});

describe("Mr. Monk Meets Dale the Whale", function(){
	it("reverses the order or the elements of an array", function(){
		//Mr. Monk was arranging the evidence in an array, 
		//but realized he has the whole list backwards.
		
		//Help Mr. Monk rearrange the list to be in the correct order.
		var evidence = ["Bloody footprints", "Missing person report", "Last Will and Testament", "Financial records" ]
		
		expect(evidence).toBe(["Financial records", "Last Will and Testament", "Missing person report", "Bloody footprints"]);
	});
});

describe("Mr. Monk Goes to the Carnival", function(){
	it("removes the first element of an array and returns that element", function(){
		//Mr. Monk analyzed the records of a missing millionaire and found that the first element 
		//of each set of records revealed a hidden message

		//Help Mr. Monk decipher the message before it's too late
		var firstRecord = [12, 421, 543, 6575, 2, 332];
		var secondRecord = [93, 423, 12, 5, 11, 2];
		var thirdRecord = [34, 23, 5, 12];
		var fourthRecord = ["Lock", "Harris and Sons", "York Co.", "Windsor Commons"];
		var fifthRecord = ["Combination", "Joint", "Single-Use", "Personal", "Business"];
		var sixthRecord = ["Trinity Bank", "112 Clumber Street", "41 Madison Avenue", "588 34th Avenue"];
		var seventhRecord = ["Deposit Box 734", "Deposit 334", "Deposit 827", "Deposit 9392"];

		var hiddenMessage; //Concatenate into a string with spaces between.

		expect(hiddenMessage).toBe("12 93 34 Lock Combination Trinity Bank Deposit Box 734");
		expect(firstRecord).toBe([421, 543, 6575, 2, 332]);
		expect(secondRecord).toBe([423, 12, 5, 11, 2]);
		expect(thirdRecord).toBe([23, 5, 12]);
		expect(fourthRecord).toBe(["Harris and Sons", "York Co.", "Windsor Commons"]);
		expect(fifthRecord).toBe(["Joint", "Single-Use", "Personal", "Business"]);
		expect(sixthRecord).toBe(["112 Clumber Street", "41 Madison Avenue", "588 34th Avenue"]);
		expect(seventhRecord).toBe(["Deposit 334", "Deposit 827", "Deposit 9392"]);
	});
});

describe("Mr. Monk Goes to the Asylum", function(){
	it("sorts the elements of an array and returns the array", function(){
		//Mr. Monk is going through a list of suspects and wants to order them 
		//by how much they had lost in the pyramid scheme.
		var suspects = [{name: "Steve", amountLost:100000},{name: "Louis", amountLost:15275000},{name: "Gary", amountLost: 98700},{name: "Newman":, amountLost:1000},{name: "Frankie", amountLost:0}];
	});
});

describe("Mr. Monk and the Billionaire Mugger", function(){
	it("adds or removes elements from an array", function(){

	});
});

describe("Mr. Monk and the Other Woman", function(){
	it("adds one of more elements to the front of an array and returns the new length of the array", function(){

	});
});

/*describe("Mr. Monk and the Marathon Man", function(){

});

describe("Mr. Monk Takes a Vacation", function(){

});

describe("Mr. Monk and the Earthquake", function(){

});

describe("Mr. Monk and the Red-Headed Stranger", function(){

});

describe("Mr. Monk and the Airplane", function(){

});*/
//.concat()
//.includes()
//.join()
//.slice()
//.indexOf()
//.lastIndexOf()