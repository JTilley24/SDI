//variables
var name = "Mike";
var jumpName = ["small", "big", "double", "triple"];

//procedure

//boolean

var tire = function(tireSpin, tireCatch) {
			var tireWipeout = false,
				tireImpact 
			if ((tireSpin && tireCatch) || !tireWipeout) {
				tireImpact = true
			}
			else {
				tireImpact = false
			};
			return tireImpact;
};

var tireStatus = tire(true, true)
console.log( "It is " + tireStatus + " that " + name + " gains control of the bike again.")

//array

var jump = function(jumpNumber, size) {
	var feet = [5, 10, 15,]
	for (jumpHeight= 0; jumpHeight < feet.length; jumpHeight++) {
		console.log(name + " hits the " + jumpName[jumpNumber] + " jump and goes " + 
			feet[jumpHeight] + size[1])
		};
	var height = jumpNumber + feet
	return height;
};

jump(1, ['"', "'"])

//number

var gear = function(throttle) {
		var speed
		var jumpSpeed = jumpName.length * 1
		while(jumpSpeed > 0) { 
		console.log(name + " can make the jump!");	jumpSpeed--
		};
		speed = throttle * jumpName.length
		return speed
};

var bikeSpeed = gear(5)
console.log(name + " makes the jump at " + bikeSpeed + " mph!")

//string

var mike = function() {
	var thought = "You can do this " + name;
	
	return thought
};
