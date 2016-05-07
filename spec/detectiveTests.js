describe("getGlobalVariable", function() {
  it("returns 'Global Scope'", function() {
    expect(getGlobalVariable()).toEqual(globalvariable);
  });
});

describe("getOffGlobalScope", function() {
  it("returns response", function() {
    expect(getOffGlobalScope()).toEqual(response);
  });
  
  it("doesn't put i on global scope", function() {
    expect(i).not.toBe(4);
  });
});

describe("hoisting", function(){
	it("should be defined", function(){
		expect(hoisting()).toEqual("The Chicken or the Egg");
	})
});