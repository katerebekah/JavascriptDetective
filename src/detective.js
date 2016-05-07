//Here's a variable defined in the global scope.
var globalvariable = "Global scope";

//This function wants to return the global variable
function getGlobalVariable(){
	return;
}

//In what scope are i and response defined?
var i;
var response;
function getOffGlobalScope(){
	var colors = ["blue", "green", "yellow", "white"];
	for(i=0; i<colors.length; i++){
		if (colors[i] === "yellow" ){
			var response = "Don't eat yellow snow."
		}
	}
	return response;
}

function hoisting(){
	var whatComesFirst = function(){
		return chicken;
	}
	var chicken = "The Chicken or the Egg?"
	return whatComesFirst();
}

